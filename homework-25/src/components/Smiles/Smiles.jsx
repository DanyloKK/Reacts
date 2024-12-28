import React, {Component} from 'react';


const Smiles = (props) => {
        const { func, smileName, count, imgSrc, alt } = props;
        return (
            <>
              <div>
                  <img onClick={() => func(smileName)} src={imgSrc} alt={alt}/>
                  <span>{count}</span>
              </div>
            </>
        )

}

export default Smiles;