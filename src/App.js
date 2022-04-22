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

  const [reply,setReply]=useState([]);
  
    // Return string from root to see if API is alive.
    useEffect(() => {
        fetch("http://localhost:5000/")
        .then((res) => res.json()
            .then((reply) => {
                setReply(reply)
                console.log(reply)
            })
        );
    }, [])

  return (
    <div className="App">
     <Main /> 
    </div>
  );
}

export default App;
