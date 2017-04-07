var Room = require('../model/room.js');
const _ = require('lodash');
const crypto = require('crypto');
/**
 * Comando que cria uma sala para o jogo e adiciona o client como um player.
 * 
 */
module.exports = function createRoomCommand(context, request) {
    // Verifica se há uma nome de sala na requisição
    if(request.name) {
        // Verifica se o nome de sala já existe.
        if(!_.find(context.rooms, (room) => { room.name = request.name; })) {
            let room = new Room();
            room.name = request.name;
            let salt = (new Date()).valueOf().toString();
            var md5sum = crypto.createHash('md5');
            room.id = md5sum.update(`${salt}${room.name}`).digest('hex');
            context.rooms[room.id] = room;

            let commandResponse = {
                type: 'create-room',
                response: {
                    room: room
                }
            }            

            context.ws.send(JSON.stringify(commandResponse));
        }
    }
}