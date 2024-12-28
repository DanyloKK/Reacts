import React, {useState, useEffect} from "react";
import '../../styles/App.css';
import Header from "../Header/Header"
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Smiles from "../Smiles/Smiles";

const App = () => {

    const [state, setState] = useState({
        sadCount: 0,
        angryCount: 0,
        loverCount: 0,
        kissCount: 0,
        winkCount: 0,
        result: 0,
        winner: "",
        showResult: false,
        todos: [],
    })

    const clearResult = () => {
        localStorage.removeItem("items")
        setState((prevState) => ({
            sadCount: 0,
            angryCount: 0,
            loverCount: 0,
            kissCount: 0,
            winkCount: 0,
            result: 0,
            winner: "",
            showResult: false,
            todos: [],
        }))
    }

    const findWinner = () => {
        const maxVotesValue = Math.max(
            state.sadCount,
            state.angryCount,
            state.loverCount,
            state.kissCount,
            state.winkCount
        );
        const maxVotes = Object.keys(state).reduce((acc, key) => {
            if (state[key] > state[acc]) {
                return key;
            }
            return acc;
        }, "sadCount");
        setState((prevState) => ({
            ...prevState,
            result: maxVotesValue,
            winner: maxVotes,
        }));

    }
    const toggleResult = () => {
        setState((prevState) => ({
            ...prevState,
            showResult: !prevState.showResult,
        }));
    }

    const saveData = () => {
        const items = JSON.parse(localStorage.getItem("items"));
        const newArray = items ? [...items, state.result, state.winner] : [state.result, state.winner]
        setState((prevState) => ({
            ...prevState,
            todos: newArray,
        }));
        localStorage.setItem("items", JSON.stringify(newArray))

    }

    useEffect(() => {
        const items = localStorage.getItem("items");
        const todos = items ? JSON.parse(items) : [];
        setState((prevState) => ({
            ...prevState,
            todos,
        }));
    }, [])


    const smileCounter = (smileName) => {
        setState((prevState) => ({
            ...prevState,
            [smileName]: prevState[smileName] + 1,
        }));
    };
    useEffect(() => {
        findWinner();
    }, [state.sadCount, state.angryCount, state.loverCount, state.kissCount, state.winkCount]);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(state.todos));
    }, [state.todos]);
    const {sadCount, angryCount, loverCount, kissCount, winkCount, result, winner, showResult} = state;

    return (
        <React.StrictMode>
            <Header/>
            <Main
                first={sadCount}
                second={angryCount}
                third={loverCount}
                fourth={kissCount}
                fifth={winkCount}
                func={smileCounter}
            />
            <Footer result={result}
                    winner={winner}
                    showResult={showResult}
                    findWinner={findWinner}
                    toggleResult={toggleResult}
                    clearResult={clearResult}
                    saveData={saveData}
                    todos={state.todos}
            />
        </React.StrictMode>
    );
}

export default App;

