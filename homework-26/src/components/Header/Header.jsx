import React from 'react'
import Nav from "../Nav/Nav"

const Header = () => {
    return (
        <React.StrictMode>
            <div className='container navs'>
                <Nav href="/">Main</Nav>
                <Nav href="/contacts">Contacts</Nav>
                <Nav href="/about">About</Nav>
            </div>
        </React.StrictMode>
    )
}

export default Header;