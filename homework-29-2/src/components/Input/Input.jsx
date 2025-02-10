import {useState} from "react";

const Input = (props) => {
    const [task, setTask] = useState("")
    const {handleInputValue} = props;
    const handleAddTodo = () => {
        if (task.trim()) {
            handleInputValue(task);
            setTask("");
        }
    };
    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    return (
        <>
            <input
                className="input__list"
                onChange={handleInputChange}
                placeholder="Enter the task please..."
                value={task}
            />
            <button onClick={()=> handleAddTodo(task)}>Add task</button>
        </>
    )
}
export default Input;