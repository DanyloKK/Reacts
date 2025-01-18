import {useSelector, useDispatch} from "react-redux";
import selectorTodo from "../../redux/slices/selectorTodo.js";
import {Button} from '@mui/material';
import {deleteItem, fetchItems,updateItems,toggleCompleted} from "../../redux/slices/todoSlicer.js";
import {useEffect, useState} from "react";
import "../../index.css"
import {Checkbox} from "@mui/material";


const List = () => {
    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState("");
    const todoItems = useSelector(selectorTodo.todoItems)
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }
    useEffect(() => {
        dispatch(fetchItems())
    }, [])
    const handleEdit = (id, currentText) => {
        setEdit(id);
        setEditText(currentText);
    };
    const handleCancel = () => {
        setEditText("");
        setEdit(false)
    }
    const handleSave = (id) => {
        dispatch(updateItems({id,task:editText}))
        setEdit(false)
        setEditText("");
    }
    const handleCompleteToggle = (id,completed) => {
        dispatch(toggleCompleted({id,completed: !completed}))
    }
    return (
        <ul className="main__list">
            {todoItems.map((item) => {
                return (
                    <div  className="todo-block" key={item.id}>
                        <Checkbox
                            checked={item.completed}
                            onChange={() => handleCompleteToggle(item.id,item.completed)}
                            color="primary"
                        />
                        {edit === item.id ? (
                            <div>
                                <input
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => handleSave(item.id)}>Save</button>
                                <button onClick={handleCancel}>Cancel</button>
                            </div>
                        ) : (
                            <li className="todo-list">{item.task}</li>
                        )}
                        <Button
                            className="edit-todo"
                            onClick={() => handleEdit(item.id, item.task)}
                            variant="contained"
                            color="secondary"
                        >
                            Edit
                        </Button>
                        <Button
                            className="delete-todo"
                            onClick={() => handleDelete(item.id)}
                            variant="contained"
                            color="error"
                        >
                            Delete
                        </Button>
                    </div>
                );
            })}
        </ul>
    );
}
export default List