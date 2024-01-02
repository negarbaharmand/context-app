import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  // Use the useContext hook to access the theme context
  const themeContext = useContext(ThemeContext);
  const { isLightTheme, light, dark } = themeContext;
  const theme = isLightTheme ? light : dark;

  const authContext = useContext(AuthContext);
  const { isAuthenticated, toggleAuth } = authContext;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div>{isAuthenticated ? "Logged in" : "Logged out"}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
