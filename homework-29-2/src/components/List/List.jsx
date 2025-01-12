import {useDispatch, useSelector} from 'react-redux';
import selectors from "../../redux/slicer/selectors.js"
import {deleteTodo, editTodo} from "../../redux/slicer/createSlicer.js";
import {useState} from "react";


const List = () => {
    const dispatch = useDispatch();
    let selector = useSelector(selectors.element.value);
    const [editId, setEditId] = useState(null);
    const [newText, setNewText] = useState('');
    const handleDelete = (task) => {
        dispatch(deleteTodo(task))
    }
    const handleEdit = (id) =>{
        setEditId(id);
        setNewText(newText);
    }
    const saveEdit = () => {
        dispatch(editTodo({ id: editId, newText }));
        setEditId(null);
    }
    const cancelEdit = () => {
        setEditId(null);
    }

    return (
        <ul className="todo-list">
            {selector.map((todo) => (
                    <>
                        <li key={todo.id} className="todo-item">
                            {editId === todo.id ? (
                                <>
                                    <input
                                        className="edit__input"
                                        type="text"
                                        value={newText}
                                        onChange={(e) => setNewText(e.target.value)}
                                    />
                                    <button onClick={cancelEdit}>Cancel</button>
                                    <button onClick={saveEdit}>Save</button>
                                </>
                            ) : (
                                <>
                                    {todo.text}
                                </>

                            )}
                        </li>
                        <button className="delete__button" onClick={() => handleDelete(todo.id)}>Delete</button>
                        <button className="edit__button" onClick={() => handleEdit(todo.id)}>Edit</button>
                    </>
                )
            )}
        </ul>
    )
}
export default List;