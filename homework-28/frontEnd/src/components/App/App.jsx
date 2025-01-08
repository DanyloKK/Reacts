import React, {useState, useEffect} from 'react';
import '../../styles/App.css';
import Input from "../Input/Input.jsx";
import Lists from "../List/List.jsx";


function App() {
    const [todos, setTodos] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/todos");
        const data = await response.json();
        console.log("Fetched Todos:", data);
        setTodos(data);
    };
    useEffect(() => {
        fetchData();
    }, [])

    const handleTodo = async (task) => {
        const newTodo = {
            todos: task,
            checked: true,
        }
        setTodos((prevState) => {
            const updatedTodos = [...prevState, newTodo];
            return updatedTodos
        });
        await handlePost(newTodo);
        fetchData();
        console.log(todos);
    };
    const handlePost = async (newTodo) => {
        try {
            const response = await fetch("http://localhost:8080/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newTodo)
            })
            const data = await response.json();
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }
    const handleDelete = async (id) => {
        setTodos((prevState) => {
            const updatedTodos = prevState.filter((item) => item._id !== id);
            console.log('Обновленное состояние:', updatedTodos);
            return updatedTodos;
        });
        try {
            const response = await fetch(`http://localhost:8080/todos/${id}`, {
                method: "DELETE",
            })
            if (!response.ok) {
                throw new Error("Не удалось удалить задачу с сервера");
            }
            console.log('Удаление на сервере прошло успешно');

            const data = await response.json();
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div>
            <h1>Todo list</h1>
            <Input addTodo={handleTodo}/>
            <Lists handleDelete={handleDelete} items={todos}/>
        </div>
    );
}

export default App;

