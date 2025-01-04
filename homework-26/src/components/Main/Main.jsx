import React, {useState, useEffect} from 'react'
import List from '../List/List'
import Form from '../Form/Form';

const Main = () => {
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
                <Form addItem={addItem}/>
                <List todos={todos} removeItem={removeItem}  />
        </React.StrictMode>
    )
}
export default Main;