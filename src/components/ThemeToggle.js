import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
    const context = useContext(ThemeContext);
    const toggleTheme = context.toggleTheme;
    return ( 
        <button onClick={toggleTheme}> Toggle the theme</button>
     );
}

export default ThemeToggle;