const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8097, path: '/dadinho' });

wss.on('connection', (ws) => {
    console.log('conectado...');
    let userId = ws.upgradeReq.headers['sec-websocket-key'];
    console.log(`Usuário conectado: ${userId}`);
    ws.on('message', (data) => {
        let messageUserId = ws.upgradeReq.headers['sec-websocket-key'];
        console.log(`Mensagem de: ${messageUserId}`);
        // Broadcast to everyone else.
        wss.clients.forEach(function each(client) {
            if (client !== ws) {
                client.send(data);
            }
        });
    });
});