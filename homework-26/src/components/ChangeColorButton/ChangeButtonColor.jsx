import {useContext,useEffect} from 'react'
import {ThemeContext} from "../../context";

const ChangeButtonColor = () => {
    const {theme, themes, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme(theme === themes.lightMode ? themes.darkMode : themes.lightMode);
    }
    useEffect(() => {
        document.body.classList.toggle("dark", theme === themes.darkMode);
    }, [theme, themes]);
    return (
        <div className="theme-switch" onClick={toggleTheme}>
            <div className="circle">
                <span className={`icon sun ${theme.showDay || theme.hideDay}`}>☀️</span>
                <span className={`icon moon ${theme.showNight || theme.hideNight}`}>🌙</span>
            </div>
        </div>
    )
}
export default ChangeButtonColor