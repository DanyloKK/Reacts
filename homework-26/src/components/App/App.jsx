import React from "react"
import Header from "../Header/Header"
import Main from "../Main/Main"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import "../../App.css"
import ChangeButtonColor from "../ChangeColorButton/ChangeButtonColor";
import {themes, ThemeContext} from "../../context"
import {useState} from "react";
import ErrorBoundary from "../../ErrorBoundary"


const App = () => {
    const [theme, setTheme] = useState(themes.lightMode);
    return (
        <React.StrictMode>
            <ThemeContext.Provider value={{themes, theme, setTheme}}>
                <ErrorBoundary>
                    <BrowserRouter>
                        <Header/>
                        <main className="container contains ">
                            <Routes>
                                <Route path="/" element={<Main/>}></Route>
                                <Route path="/contacts" element={<Contacts/>}></Route>
                                <Route path="/about" element={<About/>}></Route>
                            </Routes>
                            <ChangeButtonColor/>
                        </main>
                    </BrowserRouter>
                </ErrorBoundary>

            </ThemeContext.Provider>


        </React.StrictMode>
    )
}

export default App;