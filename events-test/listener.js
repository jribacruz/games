const EventEmitter = require('events');

const ev = new EventEmitter();
ev.on('enter-room', () => {
    console.log('Evento observado');
});
