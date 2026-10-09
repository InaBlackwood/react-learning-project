import React, { useState } from 'react';
import Selector from './selector.jsx'
import useFetch from './api/fetchdata.jsx'
import UseElement from './useElement.jsx';

function Planner() {

    const navElements = ['rooms','add-ons','meals'];
    const [navigation,setNavigation] = useState( navElements[0] );
    
    function navigate(e) {
        setNavigation( e.target.outerText.toLowerCase() );
    } 

    //function sample() { alert("preset!"); }
    //const [currentNumber,setCurrentNumber] = UseElement(0);

    const [totalCost,setTotaCost] = useState(0);
    const [currentElements,setCurrentElements] = useState ( 
        //{ "rooms":[], "add-ons":[], "meals":[] }
        () => {
            let newObj = {};
            navElements.forEach( (navElem) => { newObj[navElem]=[] } )
            return newObj;
        }
    );

    const updateElements = function ( addedElement = {}, add=true ) {

        let UpdatedElements = JSON.parse(JSON.stringify(currentElements));
        let newTotal = totalCost;

        console.dir("INIT",addedElement,currentElements,UpdatedElements);

        Object.keys(currentElements).forEach( (sectionName) => {
            if ( sectionName === navigation ) {
                let found = false;
                let additionTotals = (dontPush,index=0) => {
                    console.log( "found IT?: "+dontPush,addedElement );
                    newTotal = newTotal + addedElement.price;
                    addedElement.quantity += 1;
                    (dontPush) ? UpdatedElements[sectionName][index]['quantity']+=1 : UpdatedElements[sectionName].push(addedElement);
                }
                //console.log( currentElements[sectionName].length,currentElements[sectionName] );
                if ( currentElements[sectionName].length == 0 ) currentElements[sectionName].push( addedElement );
                //currentElements[sectionName].push(addedElement);
                currentElements[sectionName].map((analyzeObject,index) => {
                    if ( analyzeObject.name === addedElement.name && !found) {

                        
                        if ( UpdatedElements[sectionName].length !== 0  ) {
                            if ( UpdatedElements[sectionName][index] != undefined 
                                    &&  analyzeObject.name  === UpdatedElements[sectionName][index]['name'] 
                            ) found = true;
                        }
                        //console.dir( "found IT?: "+found,analyzeObject,"=?",UpdatedElements[sectionName][index],"=?",addedElement);
                        if (add) {
                            additionTotals(found,index);
                            found=true;
                        } else {
                            if (found) {
                                newTotal = newTotal - addedElement.price;
                                UpdatedElements[sectionName][index]['quantity']-=1;
                                addedElement.quantity -= 1;
                                if (UpdatedElements[sectionName][index]['quantity'] <= 0) UpdatedElements[sectionName].splice(index,1);
                            }
                        }
                    }  
                })
                if (!found && add ) additionTotals(found);
            }
        })

        console.dir("END",currentElements,UpdatedElements);

        //setCurrentElements(() => { return UpdatedElements; });
        setCurrentElements(UpdatedElements);
        setTotaCost(newTotal);

        
                /*
                    console.log(addedElement,currentElements);
                    setCurrentElements(addedElement);
                    console.log("UPDATE ELEMENTS: "+(add?'ADDED':'EXTRACTED'),addedElement,currentElements);
                */

                /*

                            Object.keys(analyzeObject).map((objKey) => {
                        if ( objKey === "name" && analyzeObject[objKey] === addedElement.name ) {
                            
                            (add) ?  : UpdatedElements.sectionName[index]["quantity"]--;
                            if ( UpdatedElements.sectionName[index]["quantity"] <= 0 ) {
                                
                            } else {
                                found = true;
                            }
                            
                        }
                    }) 

                    Object.keys(currentElements).forEach((sectionName) => {
                        fullSection.forEach((index,element) => {
                            console.log("Inside "+sectionName+": ("+index+") "+element.name+"(x"+element.quantity+")");
                        });
                    });
                */

    }

    function showDetails() {

        window.confirm( JSON.stringify(currentElements,null,2)+"\nTOTAL COST:"+totalCost );

        //alert(currentElements);

        /*
        setCurrentElements({
            "rooms": [
                {
                "name": "Auditorium",
                "price": 5500,
                "quantity": 0,
                "image": "/room.auditorium.jpg",
                "description": "Large auditorium with a capacity of up to 200 people."
                },
                {
                "name": "Presentation Room",
                "price": 700,
                "quantity": 0,
                "image": "/room.presentation-room.jpg",
                "description": "Presentation room with a capacity of up to 50 people."
                }
            ], "add-ons": [
                {
                "name": "Speakers",
                "price": 35,
                "quantity": 0,
                "image": "/add-on.speakers.jpg"
                },
                {
                "name": "Microphones",
                "price": 45,
                "quantity": 0,
                "image": "/add-on.microphone.jpg"
                }
            ],  "meals": [
                {
                "name": "Breakfast",
                "price": 50,
                "quantity": 0
                },
                {
                "name": "Dinner",
                "price": 70,
                "quantity": 0
                }
            ]    
        })
        */

    }
    
    return (
        <>

            { /* console.log(fullInfo) */ }

            <article id="planner-page">

                <nav id="navigation-container">
                    <div>Logo</div>
                    <ul>
                        {navElements.map( (navTab) => (
                            <li key={navTab.toUpperCase()}>
                                <a onClick={(e) => { navigate(e) }}> 
                                    {navTab.charAt(0).toUpperCase() + navTab.slice(1)} 
                                </a>
                            </li>
                        ))}
                    </ul>        

                    <button onClick={ () => showDetails() }>
                        Show Details
                    </button>

                </nav>

                <Selector 
                    nav={ navigation } 
                    updateElements={ updateElements }
                />

                <section id="totals-container">
                    Total cost: { totalCost }
                </section>

            </article>
        </>
    )

}

export default Planner;

// todo: navbar / selector / totals / Show details