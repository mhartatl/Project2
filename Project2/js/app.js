//find out what news source was clicked
var url1 = 'https://www.reddit.com/top.json';
var url2 = 'http://api.npr.org/query?id=1001&apiKey=MDI0MjE0OTE3MDE0NjI2NTk2MTk4NzZiMQ000';
var url3 = 'http://digg.com/api/news/popular.json;';
var url = '';

$(document).ready(function (event) {
    $('.container li').click(function (e) {
        /* Want to set the url equal to what is clicked
        $('#News Source').change(function(e){
         var clickedURL = $('a', this).attr('href');
         console.log('clicked on ' + url);
         }); */
    });

    url = url1;
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;

    'use strict';

    $.ajax({
        url: url,
        data: {format: "json"},
        success: function (response) {
            console.log('page loaded');
        },
        error: function (response) {
            console.log('error');
        }
    });
    httpRequest.open('GET', url);
    httpRequest.send();

    function responseMethod(response) {
        // Check if our state is "DONE"
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // If our request was successful we get a return code/status of 200
            if (httpRequest.status === 200) {
                //var allData = response.data?response.data | [];
               // var allData = (response.data==undefined ? response.data:[]);
                    var responseObject;
                    responseObject = JSON.parse(httpRequest.responseText);
                    console.log('response object is ' + responseObject);
                    var newContent = '';
                    for (var i = 0; i < responseObject.length; i++) {
                        newContent += '<div class="event">';
                        newContent += '<img src="' + responseObject.events[i].map + '"';
                       // newContent += 'alt="' + responseObject.events[i].location + '"/>';
                       // newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
                       // newContent += responseObject.events[i].dateTime + '</p>';
                        newContent += '</div>';

                    }
                console.log('newContent is '+ newContent);
             //   document.getElementById('name').innerHTML = newContent;
                console.log(httpRequest.responseText);
            } else {
                // This is the scenario that there was an error with our request
                console.log('There was a problem with the request.');
            }
        }
    }


});

