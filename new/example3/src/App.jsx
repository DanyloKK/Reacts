import { useEffect, useState } from 'react';

import Form from './components/Form/Form';
import List from './components/List/List';
import Header from './components/Header/Header';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const jsonTodos = localStorage.getItem('todos')
    const todos = jsonTodos ? JSON.parse(jsonTodos) : [];

    setTodos(todos);
  }, []);

  const addItem = (value) => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    let newArray = todos ? [...todos, value] : [value];

    setTodos(newArray);
    localStorage.setItem('todos', JSON.stringify(newArray));
  }

  return (
    <>
    <Header />
    <main className="container">
      <Form addItem={addItem} />
      <List values={todos} />
    </main>
  </>
  )
}

export default App
