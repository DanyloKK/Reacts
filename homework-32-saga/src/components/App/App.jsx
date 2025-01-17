import Header from "../Header/Header.jsx";
import List from "../List/List.jsx";
import Input from "../Input/Input.jsx";
import '../../App.css'
import {Provider} from "react-redux";
import {store} from "../../redux/store.js";

function App() {


    return (
        <Provider store={store}>
            <Header/>
            <Input/>
            <List/>
        </Provider>
    )
}

export default App
