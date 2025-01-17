import {useSelector} from "react-redux";
import selectorTodo from "../../redux/slices/selectorTodo.js";

const List = () => {
    const todoItems = useSelector(selectorTodo.todoItems)
    return (
        <ul>
            {todoItems.map((item)=>{
                return <li key={item.id}>{item.task}</li>
            })}
        </ul>
    )
}
export default List