import { Form } from 'react-final-form';
import { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import ItemsList from './components/ItemsList/ItemsList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (value) => {
    setTodos(prevState => [...prevState, value.name])
  };

  return (
    <>
      <h1>Todo</h1>
      <Form onSubmit={handleSubmit} render={TodoForm} />
      <ItemsList items={todos} />
    </>
  );
}

export default App;
