
// To import events package
var events = require('events');
var eventEmitter = new events.EventEmitter();

var my_event = my_event

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.\n');
}
// Bind the connection event with the listner1 function
eventEmitter.addListener(my_event, listner1);

// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.\n');
}
// Bind the connection event with the listner2 function
eventEmitter.on(my_event, listner2);

// Get number of listener on 'connection' event
var eventListeners = events.EventEmitter.listenerCount(eventEmitter,my_event);
console.log(eventListeners + " Listner(s) listening to connection event\n\n");

// Fire the connection event
eventEmitter.emit(my_event);

// Remove the binding of listner1 function
eventEmitter.removeListener(my_event, listner1);
console.log("\n\nListner1 will not listen now.\n\n");

// Fire the connection event
eventEmitter.emit(my_event);

eventListeners = events.EventEmitter.listenerCount(eventEmitter,my_event);
console.log(eventListeners + " Listner(s) listening to connection event\n\n");

console.log("Program Ended.");