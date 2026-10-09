import React, { useEffect, useState } from 'react'
import ApiInfo from './info.json'

const useFetch = (url='') => {

    const [ data,setData ] = useState();

    useEffect( ()=> {
        if(url) {
            fetch(url).then((res)=>res.json())
            .then((data)=>setData(data))
        } else {
            setData(ApiInfo);
        }

    } ,[] )

    //console.log('info',data);

    return [data];
    
}

export default useFetch

/*
// OPTION 2
import React, { useEffect, useState } from 'react';

const useFetch = (url='') => { 
    
    const [data, setData] = useState(null);

    console.log("Data from:",url);

    useEffect( () => { 
        if (!url) return; // prevent fetch if url is empty or undefined
        fetch(url) 
        .then(
            (res) => res.json()
        ) 
        //.then( (res) => { res.json(); console.log("Result: ",res) } ) 
        .then( 
            (data) => setData(data) 
        ) 
        //.then( (data) => { console.log("Fetch Data: ",data); setData(data)} ) 
        .catch(
            (error) => { 
            console.error('Cool fetch error:', error); 
            setData(null); }
        ); 
        }, [url] ); // add url as dependency

    return [data]; 

};

export default useFetch;
*/
//OPTION 3: AXIOS 
/*

import React, { useState } from 'react';
import axios from 'axios';

const useFetch = (apiUrl) => { 

    const [data, setData] = useState(null);
            
    axios.get(apiUrl)
    .then(response => {
        console.log(response.data);
        setData(response.data);
        
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    }, [apiUrl] );

    //Check infinite data retrieving for no aparent reason
    console.log("Data from:",apiUrl);

    return [data]; 

};

export default useFetch;
*/