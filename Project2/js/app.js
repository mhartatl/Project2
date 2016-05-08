//find out what news source was clicked
var url1 = 'https://www.reddit.com/top.json';
var url2 = 'http://api.npr.org/query?id=1001&apiKey=MDI0MjE0OTE3MDE0NjI2NTk2MTk4NzZiMQ000';
var url3 = 'http://digg.com/api/news/popular.json;';
var urlnews = '';

/*$$("nav ul li").click(function() {
 var submenu = $(this).find('.submenu');
 $('.submenu').not(submenu).fadeToggle().removeClass('opened');
 submenu.addClass('opened').fadeToggle();
 });*/
$(document).ready(function (event) {
    $(".container li").click(function(e) {
        //var j = $(this).find.valueOf();
       // console.log('news chosen is '+ $(this).className);
        //$('.submenu').not(submenu).fadeToggle().removeClass('opened');
        //submenu.addClass('opened').fadeToggle();
    });

    });

    urlnews = url1;
    var urldataformat = "";
    var httpRequest = new XMLHttpRequest();
    httpRequest.onload = responseMethod;

    'use strict';
switch(urlnews) {
    case url1:
        urldataformat = "JSON"
        break;
    case url2:
        urldataformat = "XML"
        break;
    case url3:
        urldataformat = "JSONP";
        break
}
$.ajax({
    url: urlnews,
    data: {format: urldataformat},
    crossDomain: true,
    withCredentials: false,
    success: function (response) {
        console.log('url page loaded ');
    },
    error: function (response) {
        console.log('error on url');
    }
});

    httpRequest.open('GET', urlnews,true);
    httpRequest.send(null);

    function responseMethod(response) {
        // Check if our state is "DONE"
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // If our request was successful we get a return code/status of 200
            if (httpRequest.status === 200) {
                //var allData = response.data?response.data | [];
               // var allData = (response.data==undefined ? response.data:[]);
                var responseObject;
                if (urldataformat="JSON") {
                    responseObject = JSON.parse(httpRequest.responseText);
                }else {
                    if (urldataformat = "XML") {
                        responseObject = XML.parse(httpRequest.responseText);
                    }
                }
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


/*$.ajax({

    // The 'type' property sets the HTTP method.
    // A value of 'PUT' or 'DELETE' will trigger a preflight request.
    type: 'GET',

    // The URL to make the request to.
    url: 'http://updates.html5rocks.com',

    // The 'contentType' property sets the 'Content-Type' header.
    // The JQuery default for this property is
    // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
    // a preflight. If you set this value to anything other than
    // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
    // you will trigger a preflight request.
    contentType: 'text/plain',

    xhrFields: {
        // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
        // This can be used to set the 'withCredentials' property.
        // Set the value to 'true' if you'd like to pass cookies to the server.
        // If this is enabled, your server must respond with the header
        // 'Access-Control-Allow-Credentials: true'.
        withCredentials: false
    },

    headers: {
        // Set any custom headers here.
        // If you set any non-simple headers, your server must include these
        // headers in the 'Access-Control-Allow-Headers' response header.
    },

    success: function() {
        // Here's where you handle a successful response.
    },

    error: function() {
        // Here's where you handle an error response.
        // Note that if the error was due to a CORS issue,
        // this function will still fire, but there won't be any additional
        // information about the error.
    }
}); */

/* // Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
    return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
    // All HTML5 Rocks properties support CORS.
    var url = 'http://updates.html5rocks.com';

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function() {
        var text = xhr.responseText;
        var title = getTitle(text);
        alert('Response from CORS request to ' + url + ': ' + title);
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };

    xhr.send();
}*/