import React, {Component} from "react";


const Footer = (props) => {
    const {result,winner,showResult, findWinner,toggleResult,clearResult,saveData,todos} = props;
    const todo = todos;
    const votes = todo.filter((item, index) => index % 2 !== 0);
    const winners = todo.filter((item, index) => index % 2 === 0)
    return (
        <div className="container footer">
            <button className="btn btn-success mt-5 me-5" onClick={toggleResult}>
                Show results
            </button>
            <button className="btn btn-info mt-5 me-5" onClick={saveData}>Save</button>
            <button className="btn btn-danger mt-5" onClick={clearResult}>
                Clear results
            </button>
            <div className="mt-5 mb-5">
                <span>Results of voting</span>
                {showResult &&
                    <div>
                        <p>Winner:{winners.length > 0 ? winners[winners.length - 1] : "No results"} </p>
                        <p>Amount of votes:{votes.length > 0 ? votes[votes.length - 1] : "No results"} </p>
                    </div>
                }
            </div>
        </div>
    );

}

export default Footer;