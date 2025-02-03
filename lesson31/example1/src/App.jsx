import TodoForm from './components/TodoForm/TodoForm';
import ItemsList from './components/ItemsList/ItemsList';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <h1>Todo</h1>
      <TodoForm />
      <ItemsList />
    </Provider>
  );
}

export default App;
