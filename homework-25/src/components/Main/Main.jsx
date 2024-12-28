import React, {Component} from "react";
import Sad from "../../assets/img/sad.png";
import Angry from "../../assets/img/angry.png";
import Lover from "../../assets/img/lover.png";
import Kiss from "../../assets/img/kiss.png";
import Wink from "../../assets/img/wink.png";
import Smiles from "../Smiles/Smiles"

const Main = (props) => {
    const {first,second,third,fourth,fifth,func} = props;
        return (
            <div className="container main">
                <Smiles
                    func={func}
                    count={first}
                    smileName="sadCount"
                    imgSrc={Sad}
                    alt="Sad"/>
                <Smiles
                    func={func}
                    count={second}
                    smileName="angryCount"
                    imgSrc={Angry}
                    alt="Angry"/>
                <Smiles
                    func={func}
                    count={third}
                    smileName="loverCount"
                    imgSrc={Lover}
                    alt="Lover"/>
                <Smiles
                    func={func}
                    count={fourth}
                    smileName="kissCount"
                    imgSrc={Kiss}
                    alt="Kiss"/>
                <Smiles
                    func={func}
                    count={fifth}
                    smileName="winkCount"
                    imgSrc={Wink}
                    alt="Wink"/>
            </div>
        )
}

export default Main;