import { Square } from "../Square/Square.jsx";
import { useWinner } from "../../hooks/useWinner.js";


export const Board = () => {
    const { handleClear, handleUpdate, squares } = useWinner();
    return (
        <>
            <div style={{display: "flex"}}>
                <Square index={0} value={squares[0]} onClick={handleUpdate}/>
                <Square index={1} value={squares[1]} onClick={handleUpdate}/>
                <Square index={2} value={squares[2]} onClick={handleUpdate}/>
            </div>
            <div style={{display: "flex"}}>
                <Square index={3} value={squares[3]} onClick={handleUpdate}/>
                <Square index={4} value={squares[4]} onClick={handleUpdate}/>
                <Square index={5} value={squares[5]} onClick={handleUpdate}/>
            </div>
            <div style={{display: "flex"}}>
                <Square index={6} value={squares[6]} onClick={handleUpdate}/>
                <Square index={7} value={squares[7]} onClick={handleUpdate}/>
                <Square index={8} value={squares[8]} onClick={handleUpdate}/>
            </div>
            <button onClick={handleClear}>
                Clear
            </button>
        </>
    )
}
