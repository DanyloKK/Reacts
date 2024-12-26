import React, {Component} from "react";


class Footer extends Component {
    render() {
         const todos = this.props.todos;
         const votes = todos.filter((item,index) => index % 2 !== 0);
        const winner = todos.filter((item,index) => index % 2 === 0)
        return (
            <div className="container footer">
                <button className="btn btn-success mt-5 me-5" onClick={this.props.toggleResult}>
                    Show results
                </button>
                <button className="btn btn-info mt-5 me-5" onClick={this.props.saveData}>Save</button>
                <button className="btn btn-danger mt-5" onClick={this.props.clearResult}>
                    Clear results
                </button>
                <div className="mt-5 mb-5">
                    <span>Results of voting</span>
                    {this.props.showResult &&
                        <div>
                            <p>Winner:{winner.length > 0 ? winner[winner.length - 1] : "No results" } </p>
                            <p>Amount of votes:{votes.length > 0 ? votes[votes.length - 1] : "No results" } </p>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Footer;