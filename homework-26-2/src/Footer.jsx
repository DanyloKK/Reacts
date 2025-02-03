import React, {useContext, useState} from 'react';
import {themeContext, theme} from './theme';
const Footer = () => {
    const [themes] = useContext(themeContext);
    return (
        <footer style={{backgroundColor:themes.backgroundColor}} className="container">
            <h3 style={{color:themes.color}}>This is Footer!</h3>

        </footer>
    )
}

export default Footer;