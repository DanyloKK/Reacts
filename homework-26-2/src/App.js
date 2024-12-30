import React, {useState, useCallback, useEffect} from 'react';
import './App.css';


function App() {
    const [items, setItems] = useState(0);
    const [loading, setLoading] = useState(0);
    useEffect(() => {
        console.log("Изменился")
    }, [loading])
    useEffect(() => {
        console.log("Изменился2")
    }, [items])
    return (<React.StrictMode>
        <div>
            <h1>Counter1:{items}</h1>
            <button onClick={() => setItems(items + 1)}>Count1</button>
            <h1>Counter2:{loading}</h1>
            <button onClick={() => setLoading(loading + 1)}>Count2</button>
        </div>
    </React.StrictMode>);
}

export default App;
