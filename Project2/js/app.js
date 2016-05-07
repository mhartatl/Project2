
//find out what news source was clicked
$('li.container').click(function(e){
    var clickedURL = $('a', this).attr('href');
    console.log('clicked on ' + clickedURL);
    return false; // you can use e.preventDefault(); instead of this.Same effect
});

// $(document).ready(function() {
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
//$('#getDataButton').click (function(event){
//    event.preventDefault();

    $.ajax({
        url: 'http://digg.com/api/news/popular.json',
        data:{format: "json"},
        success: function(response){
            console.log(response);
        },
        error: function(response){
            console.log('error');
        }
    });
//});


// Open method accepts 3 parameter:
// 1. Request type: these are all the HTTP verbs we covered above
// 2. The URL
// 3. Optional boolean third parameter, that dictates wether this is an asynchronous call (default is true)
httpRequest.open('GET', 'http://data.consumerfinance.gov/api/views.json');

// The send method takes an optional parameter. If our API request allows additional parameters or JSON objects
// to be passed through (primarily through POST requests), we pass them in the send method.
httpRequest.send();

/*$.ajax({
    url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
    dataType : 'json',
    success  : function (data) {
        if (data.responseData.feed && data.responseData.feed.entries) {
            $.each(data.responseData.feed.entries, function (i, e) {
                console.log("------------------------");
                console.log("title      : " + e.title);
                console.log("author     : " + e.author);
                console.log("description: " + e.description);
            });
        }
    }
}); */
