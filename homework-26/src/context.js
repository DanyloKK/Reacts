import {createContext, useEffect, useState} from "react";

export const themes = {
    darkMode:{
        showNight:"showMoon",
        hideDay:"hideSun"
    },
    lightMode:{
        hideNight:"moon",
        showDay:"sun"
    }


}
export const ThemeContext = createContext();
/*
export const  ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.light)
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === themes.light ? themes.dark : themes.light));
    };

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

 */