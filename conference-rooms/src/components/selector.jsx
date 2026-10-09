import React, { useState } from 'react';
import SelectorElement from './selectorElement.jsx'
import useFetch from './api/fetchdata.jsx'

const Selector = ( {nav, updateElements } ) => {

    const [fullInfo] = useFetch();

    //console.log(currentNumber);
    return (

        <>
            { fullInfo && Object.keys(fullInfo).map( (tab) => (

                //console.log(fullInfo[tab],tab,nav);
                //console.log(currentElement)
                /*
                ( tab == nav ) && fullInfo[tab].map( function( infoElement ) {
                    return  <SelectorElement selectorInfo={infoElement} />
                })
                    */
                   

                ( tab == nav ) && fullInfo[tab].map( ( infoElement,keyIndex ) => (

                        <SelectorElement
                            index={ keyIndex }
                            selectorInfo={ infoElement }
                            updateElements={updateElements}
                        />

                ))

            ))}
        </>    

    )

}

export default Selector;

// (name,image,price,quantity,desc='')

            /*
            { fullInfo && fullInfo.map(( information,tab ) => (

                ( tab == navigation ) &&  information.map(( currentElement ) => ( 
                    <SelectorElement selectorInfo={ currentElement } />
                ))
            ))}*/

/*

{ yogaInfo && yogaInfo.map(( yoga,index ) => (
    
    <li key={ 'yoga_'+index } className='list_data'>
            <h3> { yoga.name } </h3>
            { Object.keys(yoga).map(function(props) {
                //console.log(yoga,elem,yoga[elem]);
                if (props !== 'name') return <p key={ 'yoga_prop_'+index+'_'+props }> <span> {props} </span> {yoga[props]} </p>
            }) }
    </li>
))}

*/