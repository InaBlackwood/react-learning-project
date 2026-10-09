import React, { useState } from 'react';
import UseElement from './useElement.jsx';

const SelectorElement = ( {index, selectorInfo, updateElements} ) => {

    //console.log("key"+index);

    //const [newNumber,setCurrentNumber] = UseElement(currentNumber);

    return (
        <>
            <div className="elem-selector" key={ index+'_'+selectorInfo.name.replace(/\s/g,'_') }>
                { selectorInfo.image && <img className="elem-image" src={ selectorInfo.image }></img> } 
                <p className="elem-name"> { selectorInfo.name } </p>
                {selectorInfo.description && <p className="elem-desc"> { selectorInfo.description } </p>}
                <span className="elem-price">{ selectorInfo.price }</span>
                <div>
                    <button className="elem-button button-less" onClick={ () => updateElements(selectorInfo,false) } >
                         - 
                    </button>
                    <span className="elem-quantity">{ selectorInfo.quantity }</span>
                    <button className="elem-button button-more" onClick={ () => updateElements(selectorInfo)} >
                         + 
                    </button>
                </div>
            </div>
        </>
    )

}

export default SelectorElement;

/*
    {
      "name": "Presentation Room",
      "price": 700,
      "quantity": 0,
      "image": "../assets/img/room.presentation-room.jpg",
      "description": "Presentation room with a capacity of up to 50 people."
    }
*/
