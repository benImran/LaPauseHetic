var date = new Date();

var heure   = date.getHours();
var minute  = date.getMinutes();

var heurepause = 10;
var minutepause = 52;



setInterval(function () {
        if (heurepause === heure && minutepause === minute) {

            alert("Il est" + heurepause + " heure " + minutepause + " minutes ")
        } else {
            alert("c'est pas l'heure");
        }
    }, 6000)

