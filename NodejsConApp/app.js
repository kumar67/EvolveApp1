'use strict';

console.log('Hello world');

var net = require('net');
//var tcp_server = net.createServer(function (socket) {
//    socket.write('a\n');
//    socket.write('b\n');
//    socket.write('c\n');
//    socket.end('Kanjilal\n');
//});
//tcp_server.listen(8000);
var http = require('http');
var dt = require('./kmod');
var uc = require('upper-case');

var ctr = 0;
var events = require('events');
var eventEmitter = new events.EventEmitter();

if (ctr == 0) {
    
    //Create an event handler:
    var myEventHandler = function() {
        console.log('I hear a scream!' + ctr);
    }


    //Assign the event handler to an event:
    eventEmitter.on('scream', myEventHandler);

    //Fire the 'scream' event:
    //eventEmitter.emit('scream');
}
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var str = 'date=' + dt.myDateTime();
    str = uc(str+ctr);
    res.write(str);
    res.end('<end>');
    eventEmitter.emit('scream');
    ctr++;
}).listen(8000);

