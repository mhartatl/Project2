
var favorite
var length = 0
var favList = [];

function myStartup() {

    var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));

    console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

    document.getElementById("results").innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

    favorite = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];

}
    function myFavorite() {


        favList.push(favorite);
        console.log('Array value is ' + length + favList[0]);
        length = length + 1;

    }
        function myPrint() {
            var str = "";
            for (i = 0; i < length; i++) {
                str += favList[i];
                str +=". " ;
                str += "<br />" ;
                //window.println(favList[i]);
            }
            document.getElementById("favorites").innerHTML = str;
        }
