import React, {Component} from 'react';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log("Ошибка:", error);
        console.log("Информация об ошибке:", errorInfo);
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Some error occured!</h1>
                    <p>Please try later or reset the page!</p>
                </div>
            )
        }
        return (
            this.props.children
        )
    }
}
export default ErrorBoundary;
