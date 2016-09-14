//  ------------------------------------------------------------------
//  COMMON FUNCTIONS
//  ------------------------------------------------------------------

function writeToConsole(colour, log, newline) {
    var linebreak = "";
    if(newline) {
        linebreak = "<br />";
    }

    var console = document.getElementById("console");
    console.innerHTML = "<span class='log-"+ colour + "'> " + getTimestamp() + " | " + log + "</span>" + linebreak + console.innerHTML;
}

function getTimestamp() {
    var currentdate = new Date();
    var hours = currentdate.getHours();
    var mins = currentdate.getMinutes();
    var secs = currentdate.getSeconds();

    // Add leading zeroes to times. 01 becomes 01 while 010 becomes 10 as
    // slice(-2) keeps only the last two chars
    hours = ("0" + hours).slice(-2);
    mins = ("0" + mins).slice(-2);
    secs = ("0" + secs).slice(-2);

    return hours + ":" + mins + ":" + secs;
}
