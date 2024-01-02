import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    // Use the useContext hook to access the theme context
    const context = useContext(ThemeContext);
    const{isLightTheme, light, dark} = context;
    const theme = isLightTheme ? light : dark;
    return (
            <nav style={{background: theme.ui, color:theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }

 
export default Navbar;
