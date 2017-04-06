/**
 * Comando que exibe as salas disponíveis do jogo.
 * 
 */
module.exports = function ShowRoomsCommand(context) {

    let commandResponse = {
        type: 'show-rooms',
        response: {
            rooms: context.rooms
        }
    }

    context.ws.send(JSON.stringify(commandResponse));
}