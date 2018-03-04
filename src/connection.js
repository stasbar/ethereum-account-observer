const net = require('net');

function checkConnection(host, port, timeout) {
    return new Promise(function(resolve, reject) {
        timeout = timeout || 3000; // default of 3 seconds
        const timer = setTimeout(function() {
            reject("timeout");
            socket.end();
        }, timeout);
        const socket = net.createConnection(port, host, function() {
            clearTimeout(timer);
            resolve();
            socket.end();
        }).on('error', function(err) {
            clearTimeout(timer);
            reject(err);
        });
    });
}

exports.checkConnection = checkConnection;