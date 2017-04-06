const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080, path: '/dadinho' });

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        // Broadcast to everyone else.
        wss.clients.forEach(function each(client) {
            if (client !== ws) {
                client.send(data);
            }
        });
    });
});