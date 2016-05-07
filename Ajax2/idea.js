/**
 * Created by maurahart on 4/30/16.
 */
var countDown = function() {
    var counter;
    for(counter = 3; counter > 0; counter--) {
        console.log(counter);
    }
}

function launchRocket(countDownFn, rocketName) {
    countDownFn();

    return function() {
        return "Launching " + rocketName;
    }
}

var firstRocket = launchRocket(countDown, "Falcon");
console.log(firstRocket());

var secondRocket = launchRocket(countDown, "Dragon");
console.log(secondRocket());