/*!
  =========================================================
  * CMPSC445 Ant Design Dashboard - v1.0.0
  =========================================================
  * Project Team: 
  * Purpose: Stock Prediction Progressive Web App
  * Coded by Mio Diaz
  =========================================================
 */

import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main.js'

// flask data passing
function App() {

  const [data,setData]=useState([]);

   // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("http://localhost:5000/data/available")
        .then((res) => res.json()
            .then((data) => {
                // Setting a data from api
                //console.log(data)
                setData(data)
                console.log(data)

            })
        );
    }, [])

  return (
    <div className="App">
     <Main />
      
      <p>{data.tickers}</p>
    
    </div>
  );
}

export default App;
