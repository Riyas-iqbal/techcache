//Import Events Module
const events = require('events');

//Create an eventEmitter object
const eventEmitter = new events.EventEmitter()

// Bind event and even handler as follows
eventEmitter.on('Hello',hello)

function hello(){
    console.log('hey')
}

// Fire an event
eventEmitter.emit('Hello')