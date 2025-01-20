import Header from "../Header/Header.jsx";
import CommonList from "../CommonList/CommonList.jsx";
import '../../App.css'
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {store} from "../../redux/store.js";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";
import Swapi from "../Swapi/Swapi.jsx"
function App() {


    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <main className="main__container">
                    <Routes >
                        <Route path="/" element={<Main/>}></Route>
                        <Route path="/todo" element={<CommonList/>}></Route>
                        <Route path="/swapi" element={<Swapi/>}></Route>
                    </Routes>
                </main>
                <Footer/>
            </Provider>
        </BrowserRouter>
    )
}

export default App
