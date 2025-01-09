import {useDispatch} from "react-redux"
import counters from "../../redux/slice/counterSlice.js";

const MathButton = () => {
    const dispatch = useDispatch();
    const plusClick = () =>{
        dispatch(counters.actions.increment())
    }
    const minusClick = () =>{
        dispatch(counters.actions.decrement())
    }

    return (
        <>
            <button onClick={plusClick}>+</button>
            <button onClick={minusClick}>-</button>
        </>
    )
}
export default MathButton