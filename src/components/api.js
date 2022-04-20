import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css"

import React, { useState, useEffect } from 'react';

function api() {

	 <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> 
	var url = "http://localhost:8000";   // The URL and the port number must match server-side
    var endpoint = "/result";            // Endpoint must match server endpoint

    var http = new XMLHttpRequest();

    // prepare GET request
    http.open("GET", url+endpoint, true);

    http.onreadystatechange = function() {
        var DONE = 4;       // 4 means the request is done.
        var OK = 200;       // 200 means a successful return.
        if (http.readyState == DONE && http.status == OK && http.responseText) {

            // JSON string
            var replyString = http.responseText;
            // convert JSON string into JavaScript object and get the scores
            var obj = JSON.parse(replyString);
            document.getElementById("result").innerHTML = 
            JSON.stringify(obj["result"][0]) + "<br>" + 
            JSON.stringify(obj["result"][1]) + "<br>" + 
            JSON.stringify(obj["result"][2]);

        }
    };

    // Send request
    http.send();
	 
	return {

		

	}
}


export default api;