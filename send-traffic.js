
//  ------------------------------------------------------------------
// RENDERER FOR send-traffic.html
//  ------------------------------------------------------------------

var port = 0;
var ip = "";
var net = require('net');
var message = "";

document.getElementById("send-message").addEventListener("click", function (e) {
    port = document.getElementById('port').value;
    ip = document.getElementById('ip').value;
    message = document.getElementById('message').value;

    if(validateForm()) {
        sendMessage();
    }
});

function sendMessage() {

    var client = new net.Socket();

    client.connect(port, ip, function() {
        client.write(message);
        writeToConsole("white", "Message sent: " + message, true);
    });

    // Listen for errors
    client.on('error', function (err) {
        writeToConsole("red", "Message not sent. " + err, true);
    });

    // Listen for replies/receipts
    client.on('data', function(data) {
        writeToConsole("grey", "Message received at: " + data + " on server: " + ip + ":" + port, true);
    	client.destroy(); // kill client after server's response
    });

    // Listen for close commands (after reply)
    client.on('close', function() {
    	//console.log('Connection closed');
    });

}

function validateForm()
{
    if (port == null || port == "" || port == " " || ip == null || ip == "" || ip == " " || message == null || message == "" || message == " ") {
        writeToConsole("red", "Error: Please fill in all fields and try again.", true);
        return false;
    }
    else {
        return true;
    }
}
