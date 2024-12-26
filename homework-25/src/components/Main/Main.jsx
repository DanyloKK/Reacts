import React, {Component} from "react";
import Sad from "../../assets/img/free-sticker-sad-8073615.png"
import Angry from "../../assets/img/free-sticker-angry-8073598.png"
import Lover from "../../assets/img/free-sticker-in-love-6983868.png"
import Kiss from "../../assets/img/free-sticker-kiss-8073609.png"
import Wink from "../../assets/img/free-sticker-wink-8445936.png"

class Main extends Component {

    render() {
        return (
            <div className="container main">
                <div>
                    <img onClick={this.props.sad} src={Sad} alt="Sad"/>
                    <span>{this.props.first}</span>
                </div>
                <div>
                    <img onClick={this.props.angry} src={Angry} alt="Sad"/>
                    <span>{this.props.second}</span>
                </div>
                <div>
                    <img onClick={this.props.lover} src={Lover} alt="Sad"/>
                    <span>{this.props.third}</span>
                </div>
                <div>
                    <img onClick={this.props.kiss} src={Kiss} alt="Sad"/>
                    <span>{this.props.fourth}</span>
                </div>
                <div>
                    <img onClick={this.props.wink} src={Wink} alt="Sad"/>
                    <span>{this.props.fifth}</span>
                </div>
            </div>
        )
    }
}

export default Main;