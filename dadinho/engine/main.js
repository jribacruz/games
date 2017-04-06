const WebSocket = require('ws');
const EventEmmiter = require('events');
const showRoomsCommand = require('./commands/showRooms.js');

/*
 * Classe que motor do dadinho.
 */
module.exports = class Engine {

    constructor() {
        console.log('Constructor...');
        this.context = {
            ws: {},
            wss: {},
            rooms: []
        };
        this.gameEvent = new EventEmmiter();
        this.gameEvent.on('show-rooms', showRoomsCommand);
    }

    /**
     * Inicia o motor do jogo.
     */
    start() {
        this.wss = new WebSocket.Server({ port: 8097, path: '/dadinho' });
        this.context.wss = this.wss;
        this.wss.on('connection', (ws) => {
            //let userId = ws.upgradeReq.headers['sec-websocket-key'];
            //console.log(`Usuário conectado: ${userId}`);
            ws.on('message', (data) => {
                //let messageUserId = ws.upgradeReq.headers['sec-websocket-key'];
                //console.log(`Mensagem de: ${messageUserId}, data: ${data}`);
                this.dispatchCommand(ws, data);
            });
        });
    }

    dispatchCommand(ws, data) {
        try {
            let commandRequest = JSON.parse(data);
            this.context.ws = ws;
            this.gameEvent.emit(commandRequest.type, this.context);
        } catch (e) {
            console.log(`Commando inválido: ${data}`);
        }
    }
}