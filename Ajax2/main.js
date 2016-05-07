/**
 * Created by maurahart on 4/30/16.
 */
/*
 - Refactor the codealong to work with user interaction. In the index.html file
 there is a "Get Consumer Finance Data" button. When the user clicks the button,
 pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
 Handle the link success and error responses accordingly, displaying results in
 console.log() if successful.
 - Separate your logic so that you can use your functions for another user button
 click of "Get Custom Data". Interact with an API of your choice and handle both
 success and error scenarios.
 */

var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = responseMethod;


function responseMethod() {
    // Check if our state is "DONE"
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // If our request was successful we get a return code/status of 200
        if (httpRequest.status === 200) {
            // This is where we update our UI accordingly. Our data is available to us through the
            // responseText parameter
            document.getElementById('Status').innerHTML = httpRequest.status;
            document.getElementById('StatusText').innerHTML = httpRequest.statusText;
            console.log(httpRequest.responseText);
        } else {
            // This is the scenario that there was an error with our request
            console.log('There was a problem with the request.');
        }
    }
}


'use strict';
//Get Financial Data Button Clicked
$('#getDataButton').click (function(event){
    event.preventDefault();

    $.ajax({
        url: 'http://data.consumerfinance.gov/api/views.json',
        data:{format: "json"},
        success: function(response){
            console.log(response);
        },
        error: function(response){
            console.log('error');
        }
    })
});


// Open method accepts 3 parameter:
// 1. Request type: these are all the HTTP verbs we covered above
// 2. The URL
// 3. Optional boolean third parameter, that dictates wether this is an asynchronous call (default is true)
httpRequest.open('GET', 'http://data.consumerfinance.gov/api/views.json');

// The send method takes an optional parameter. If our API request allows additional parameters or JSON objects
// to be passed through (primarily through POST requests), we pass them in the send method.
httpRequest.send();

// NOTE: certain APIs may require us to pass additional header data, including setting the MIME type of the request.
// We can do this through the setRequestHeader method.
// httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');



// Alternative method:
// httpRequest.onreadystatechange = function() {
//
// }
// Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD