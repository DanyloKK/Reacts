import React, {useContext, useState} from 'react';
import {themeContext, theme} from './theme';


const Header = () => {
    const [themes] = useContext(themeContext);
    return (
        <div style={{backgroundColor: themes.backgroundColor}} className="container">
            <h2 style={{color: themes.color}}>This is header!</h2>
        </div>
    )
}
export default Header;