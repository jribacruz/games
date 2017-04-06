
module.exports = function ShowRoomsCommand(context) {
    let userId = context.ws.upgradeReq.headers['sec-websocket-key'];
    console.log(`ShowRooms Command from User: ${userId}`);

    let commandResponse = {
        type: 'show-rooms',
        response: {
            rooms: context.rooms
        }
    }

    context.ws.send(JSON.stringify(commandResponse));
}