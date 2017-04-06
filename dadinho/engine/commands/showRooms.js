
module.exports = function ShowRoomsCommand(context) {
    let userId = context.ws.upgradeReq.headers['sec-websocket-key']; 
    console.log(`ShowRooms Command from User: ${userId}`);
}