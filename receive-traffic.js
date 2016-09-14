
//  ------------------------------------------------------------------
//  RENDERER FOR receive-traffic.html
//  ------------------------------------------------------------------

var port = 0;
var ip = "";
var serverRunning = false;
var net = require('net');
var server;

document.getElementById("start-server").addEventListener("click", function (e) {
    port = document.getElementById('port').value;
    ip = document.getElementById('ip').value;

    if(validateForm()) {
        configureServer();
    }
});

function configureServer() {
    if(serverRunning) {
        serverRunning = false;
        stopServer();
    }
    else {
        serverRunning = true;
        startServer();
    }
}

function startServer() {
    changeApplicationStyling("starting");
    writeToConsole("white", "Starting TCP server: " + ip + ":" + port, true);

    server = net.createServer(function(sock) {

        // Listen for inbound data
        sock.on('data', function(data) {
            // Send receipt
            sock.write(getTimestamp());
            writeToConsole("green", "Message from " + sock.remoteAddress + ": " + data, true);
        });

        // Listen for socket errors
        sock.on('error', function(data) {
            writeToConsole("red", "Error: " + data, true);
        });

        // Listen for TCP close attempts after successful messages
        sock.on('close', function(data) {
            // Do nothing
        });

        socket.destroy()
    })

    // Listen for server errors
    server.on('error', function(data) {
        writeToConsole("red", data, true);
        stopServer();
    });

    server.listen(port, ip);
}

function stopServer() {
    server.close()
    serverRunning = false;
    server = null;
    changeApplicationStyling("stopping");
    writeToConsole("white", "Server stopped: " + ip + ":" + port, true);
}

function changeApplicationStyling(serverStatus) {
    if(serverStatus == 'starting') {
        document.getElementById("start-server").innerHTML = "Stop Server";
        document.getElementById("start-server").className = "regular-large server-started";
        document.getElementById("ip").disabled = true;
        document.getElementById("port").disabled = true;
    }
    else {
        document.getElementById("start-server").innerHTML = "Start Server";
        document.getElementById("start-server").className = "regular-large server-stopped";
        document.getElementById("ip").disabled = false;
        document.getElementById("port").disabled = false;
    }
}

function validateForm()
{
    if (port == null || port == "" || port == " " || ip == null || ip == "" || ip == " ") {
        writeToConsole("red", "Error: Please fill in all fields and try again.", true);
        return false;
    }
    else {
        return true;
    }
}
