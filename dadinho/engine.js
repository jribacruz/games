const WebSocket = require('ws');
const EventEmmiter = require('events');
const showRoomsCommand = require('./engine/commands/showRooms.js');

/*
 * Classe que motor do dadinho.
 */
module.exports = class Engine {

    constructor() {
        console.log('Constructor...');
        this.wss = {};
        this.gameEvent = new EventEmmiter();
        this.gameEvent.on('show-rooms', showRoomsCommand); 
    }

    start() {
        this.wss = new WebSocket.Server({ port: 8097, path: '/dadinho' });
        this.wss.on('connection', (ws) => {
            //let userId = ws.upgradeReq.headers['sec-websocket-key'];
            //console.log(`Usuário conectado: ${userId}`);
            ws.on('message', (data) => {
                let messageUserId = ws.upgradeReq.headers['sec-websocket-key'];
                console.log(`Mensagem de: ${messageUserId}, data: ${data}`);
                try {
                    let command = JSON.parse(data);
                    this.gameEvent.emit(command.type);
                } catch(e) {
                    console.log(`Erro ao parsear commando: ${data}`);
                }
            });
        });
    }
}