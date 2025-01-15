import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import MainInfo from "../MainInfo/MainInfo.jsx";
import Input from "../Input/Input.jsx";
import {Provider} from "react-redux";
import store from "../../Redux/store.js";
function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Input/>
            <MainInfo/>
            <Footer/>
        </Provider>
    )
}

export default App
