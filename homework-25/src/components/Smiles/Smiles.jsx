import React, {Component} from 'react';


class Smiles extends Component {
    render() {
        const { func, smileName, count, imgSrc, alt } = this.props;
        return (
            <>
              <div>
                  <img onClick={() => func(smileName)} src={imgSrc} alt={alt}/>
                  <span>{count}</span>
              </div>
            </>
        )
    }
}

export default Smiles;