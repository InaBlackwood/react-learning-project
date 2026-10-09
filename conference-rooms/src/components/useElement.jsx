import React, { useState } from 'react';

//One function component for each operation ( substract, add and count ) or... one class component with 3 functions?

function UseElement( number = 0 ) {

    const [ elementCounter,setElementCounter ] = useState( number );
    
    const setCurrentNumber = () => {
        setElementCounter(number++);
    }
    return [elementCounter,setCurrentNumber];
    /*
    const add = () => { setElementCounter(elementCounter+1) }
    const substract = () => { setElementCounter(elementCounter-1) }
    
    if (addition) {
        return [elementCounter, () => {

        }];
    } else {
        return [elementCounter,substract];
    }
    
    //const elementCount
    */
}

export default UseElement;


