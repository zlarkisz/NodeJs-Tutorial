const events = require('events')
const util = require('util')

const Cars = function(model) {
  this.model = model
}

util.inherits(Cars, events.EventEmitter);

const bmw = new Cars('BMW')
const volvo = new Cars('VOLVO')
const audi = new Cars('AUDI')

const cars = [bmw, volvo, audi]

cars.forEach(car => {
  car.on('speed', text => {
    console.log(`${car.model} speed is - ${text}`);
  })
})

bmw.emit('speed', '254.5 km')
volvo.emit('speed', '180 km')

const myEmit = new events.EventEmitter();

myEmit.on('some_event', (text) => {
  console.log(text);
})

myEmit.emit('some_event', 'Event listenr working')