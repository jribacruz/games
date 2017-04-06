const EventEmitter = require('events');
const listener = require('./listener.js');

const ev = new EventEmitter();


ev.on('enter-room', () => {
    console.log('Evento observado');
});


ev.emit('enter-room');