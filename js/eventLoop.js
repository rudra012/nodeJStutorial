// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler
// andler is just function get called when event get fired
var connectHandler = function connected() {
   console.log('connection succesful.');

   // Fire the data_received event
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function

function endcall(){
    console.log('last call....');
}

eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

eventEmitter.on('connection', endcall);

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");