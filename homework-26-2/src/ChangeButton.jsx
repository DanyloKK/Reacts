import React, {useContext} from 'react';
import {themeContext, theme} from './theme';

const ChangeButton = () => {
    const [themes, setTheme] = useContext(themeContext);
    const handleClick = (target) => {
        if (target === "header") {
            setTheme(themes === theme.light ? theme.dark : theme.light);
        } else if (target === "main") {
            setTheme(themes === theme.green ? theme.dark : theme.green);
        } else if (target === "footer") {
            setTheme(themes === theme.dark ? theme.light : theme.dark);
        }
    };


    return (
        <div>
            <button onClick={() => handleClick("header")}>Change Header</button>
            <button onClick={() => handleClick("main")}>Change Main</button>
            <button onClick={() => handleClick("footer")}>Change Footer</button>
        </div>
    );
};

export default ChangeButton;