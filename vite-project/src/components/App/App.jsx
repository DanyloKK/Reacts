import {Provider} from 'react-redux'
import Header from "../Header/Header.jsx"
import MathButton from "../MathButton/MathButton.jsx"
import '../../App.css'
import {store} from "../../redux/store.js";

function App() {
    return (
        <Provider store={store}>
            <main className="App">
                <Header/>
                <MathButton/>
            </main>
        </Provider>
    )
}

export default App
