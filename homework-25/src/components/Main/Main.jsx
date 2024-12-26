import React, {Component} from "react";
import Sad from "../../assets/img/sad.png";
import Angry from "../../assets/img/angry.png";
import Lover from "../../assets/img/lover.png";
import Kiss from "../../assets/img/kiss.png";
import Wink from "../../assets/img/wink.png";
import Smiles from "../Smiles/Smiles"

class Main extends Component {

    render() {
        return (
            <div className="container main">
                <Smiles
                    func={this.props.func}
                    count={this.props.first}
                    smileName="sadCount"
                    imgSrc={Sad}
                    alt="Sad" />
                <Smiles
                    func={this.props.func}
                    count={this.props.second}
                    smileName="angryCount"
                    imgSrc={Angry}
                    alt="Angry" />
                <Smiles
                    func={this.props.func}
                    count={this.props.third}
                    smileName="loverCount"
                    imgSrc={Lover}
                    alt="Lover" />
                <Smiles
                    func={this.props.func}
                    count={this.props.fourth}
                    smileName="kissCount"
                    imgSrc={Kiss}
                    alt="Kiss" />
                <Smiles
                    func={this.props.func}
                    count={this.props.fifth}
                    smileName="winkCount"
                    imgSrc={Wink}
                    alt="Wink" />
            </div>
        )
    }
}

export default Main;