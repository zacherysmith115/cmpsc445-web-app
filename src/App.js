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

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css"


// flask data passing
function App() {
  const [data, setData] = useState({
    response: "",
  });

  useEffect(() => {
    fetch('/data', { 'methods': 'GET', headers: { }
  })
    .then(res => res.json()).then(data => {
      setData({
        response: data.description,
      })
    });
  }, []);

  return (
    <div className="App">
     <Main />
     <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> 
     <p>{data.response}</p>
    </div>
  );
}

export default App;
