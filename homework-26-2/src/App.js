import React, {useState} from 'react';
import './App.css';
import {theme, themeContext} from './theme';
import ChangeButton from "./ChangeButton";
import Header from "./Header";
import Footer from "./Footer";

function App() {
    const [themes, setThemes] = useState(theme.green);

    return (
        <themeContext.Provider value={[themes, setThemes]}>
            <Header/>
            <div className="container" style={{backgroundColor: themes.backgroundColor}}>
                <h1 className="text-center" style={{color: themes.color}}>Hello world!!!</h1>
                <ChangeButton/>
            </div>
            <Footer/>
        </themeContext.Provider>
    );
}

export default App;
