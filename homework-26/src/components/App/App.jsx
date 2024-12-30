import React, {useState, useEffect} from 'react'
import List from '../List/List'
import Form from '../Form/Form';
import Header from "../Header/Header"

const App = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const items = localStorage.getItem('items');
        const todos = items ? JSON.parse(items) : [];
        setTodos(
            todos,
        )
    }, [])
    const addItem = (value) => {
        const items = JSON.parse(localStorage.getItem('items'))
        const newArray = items ? [...items, value] : [value];
        setTodos(newArray);
        localStorage.setItem('items', JSON.stringify(newArray));
        console.log(newArray);
    }
    const removeItem = (value) => {
        const updatedArray = todos.filter(item => item !== value);
        setTodos(updatedArray);
        localStorage.setItem('items', JSON.stringify(updatedArray));
    };

    return (
        <React.StrictMode>
            <Header/>
            <main className="container">
                <Form addItem={addItem}/>
                <List todos={todos} removeItem={removeItem}  />
            </main>
        </React.StrictMode>
    )
}

export default App;