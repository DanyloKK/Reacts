import React, {Component} from "react";
import '../../styles/App.css';
import Header from "../Header/Header"
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sadCount: 0,
            angryCount: 0,
            loverCount: 0,
            kissCount: 0,
            winkCount: 0,
            result: 0,
            winner: "",
            showResult: false,
            todos: [],
        };
    }

    clearResult = () => {
        localStorage.removeItem("items")
        this.setState({
            result:0,
            winner: "",
            showResult: false,
            todos:[],
        })
    }

    findWinner = () => {
        const maxVotesValue = Math.max(
            this.state.sadCount,
            this.state.angryCount,
            this.state.loverCount,
            this.state.kissCount,
            this.state.winkCount
        );
        const maxVotes = Object.keys(this.state).reduce((acc, key) => {
            if (this.state[key] > this.state[acc]) {
                return key;
            }
            return acc;
        }, "sadCount");
        this.setState({
            result: maxVotesValue,
            winner: maxVotes,
        })

    }
    toggleResult = () => {
        this.setState((prevState) => {
            return {
                showResult: !prevState.showResult,
            }
        })
    }

    saveData = () => {
        const items = JSON.parse(localStorage.getItem("items"));
        const newArray = items ? [...items, this.state.result, this.state.winner] : [this.state.result, this.state.winner]
        this.setState({
            todos: newArray,
        })
        localStorage.setItem("items", JSON.stringify(newArray))

    }


    componentDidMount() {
        const items = localStorage.getItem("items");
        const todos = items ? JSON.parse(items) : [];
        this.setState({
            todos,
        })
    }

    sadCounter = () => {
        this.setState((prevState) => ({
            sadCount: prevState.sadCount + 1,
        }), this.findWinner);
        console.log(this.state);
    };


    angryCounter = () => {
        this.setState((prevState) => ({
            angryCount: prevState.angryCount + 1,
        }), this.findWinner);
    };


    loverCounter = () => {
        this.setState((prevState) => ({
            loverCount: prevState.loverCount + 1,

        }), this.findWinner);
    };


    kissCounter = () => {
        this.setState((prevState) => ({
            kissCount: prevState.kissCount + 1,

        }), this.findWinner);
    };


    winkCounter = () => {
        this.setState((prevState) => ({
            winkCount: prevState.winkCount + 1,

        }), this.findWinner);
    };

    render() {
        const {sadCount, angryCount, loverCount, kissCount, winkCount, result, winner, showResult} = this.state;

        return (
            <React.StrictMode>
                <Header/>
                <Main
                    sad={this.sadCounter}
                    angry={this.angryCounter}
                    lover={this.loverCounter}
                    kiss={this.kissCounter}
                    wink={this.winkCounter}
                    first={sadCount}
                    second={angryCount}
                    third={loverCount}
                    fourth={kissCount}
                    fifth={winkCount}
                />
                <Footer result={result}
                        winner={winner}
                        showResult={showResult}
                        findWinner={this.findWinner}
                        toggleResult={this.toggleResult}
                        clearResult={this.clearResult}
                        saveData={this.saveData}
                        todos={this.state.todos}
                />
            </React.StrictMode>
        );
    }
}

export default App;

