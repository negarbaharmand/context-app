import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const[context, setContext] = useState({ 
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
    });
    const toggleTheme = () => {
        setContext((prevContext) => ({
            ...prevContext,
            isLightTheme: !prevContext.isLightTheme,
        }));
    }
    return (
        <ThemeContext.Provider value={{...context, toggleTheme}}>
          {props.children}
        </ThemeContext.Provider>
      );
    };

/*class  ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
     } 
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}*/
 
export default ThemeContextProvider;