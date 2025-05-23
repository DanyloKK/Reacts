import '../../App.css'
import {addTodo} from "../../redux/slicer/createSlicer.js";
import {useDispatch} from 'react-redux';
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import Input from '../Input/Input.jsx'
import List from '../List/List.jsx'


const App = () => {
    const dispatch = useDispatch();
    const handleInputValue = (task) =>{
        dispatch(addTodo(task))
    }
    return (
        <>
            <Header/>
            <Input handleInputValue={handleInputValue}/>
            <List/>
            <Footer/>
        </>
    )

}


export default App
