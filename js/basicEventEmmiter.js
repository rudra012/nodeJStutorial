
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
var listner2 = function listner2(param1) {
  console.log(param1 + ' listner2 executed.\n');
}
// Bind the connection event with the listner2 function
eventEmitter.on(my_event, listner2);

// listener #3
var listner3 = function listner3() {
  console.log('listner3 executed and removed\n');
}
// Bind the connection event with the listner3 function for one time execution
eventEmitter.once(my_event, listner3);

// Get number of listener on 'connection' event
var eventListeners = events.EventEmitter.listenerCount(eventEmitter,my_event);
console.log(eventListeners + " Listner(s) listening to connection event\n\n");

// Fire the connection event
eventEmitter.emit(my_event);

//Returns an array of listeners for the specified event.
listeners_array = eventEmitter.listeners(my_event)
console.log(listeners_array);


// Remove the binding of listner1 function
eventEmitter.removeListener(my_event, listner1);
console.log("\n\nListner1 will not listen now.\n\n");

// Fire the connection event with Parameter
eventEmitter.emit(my_event, "Event Parameter: ");

eventListeners = events.EventEmitter.listenerCount(eventEmitter,my_event);
console.log(eventListeners + " Listner(s) listening to connection event\n\n");

// removing all listener
eventEmitter.removeAllListeners()

console.log("\nNo events availabe to listen now.\n\n");

eventListeners = events.EventEmitter.listenerCount(eventEmitter,my_event);
console.log(eventListeners + " Listner(s) listening to connection event\n\n");

// Fire the connection event
eventEmitter.emit(my_event);

console.log("Program Ended.");

console.log(listeners_array[0])
// executing listener1
listeners_array[0]()