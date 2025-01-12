import { useDispatch, useSelector } from 'react-redux';
import selectors from "../../redux/slicer/selectors.js"
import {deleteTodo} from "../../redux/slicer/createSlicer.js";


const List = () => {
    const dispatch = useDispatch();
    let selector = useSelector(selectors.element.value);
    const handleDelete = (task) =>{
        dispatch(deleteTodo(task))
    }
    return (
        <ul className="todo-list">
            {selector.map((item, index) => (
                <div key={index}>
                    <li key={index} className="todo-item">{item}
                    </li>
                    <button className="delete__button" onClick={() => handleDelete(item)}>Delete</button>
                </div>
            ))}
        </ul>
    )
}
export default List;