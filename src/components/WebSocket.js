import React from "react";


const WebSocketServer = () => {
    const { WebSocketServer } = require('ws');
    const http = require('http');

    // Spinning the http server and the WebSocket server.
    const server = http.createServer();
    const wsServer = new WebSocketServer({ server });
    const port = 8000;
    server.listen(port, () => {
    console.log(`WebSocket server is running on port ${port}`);

    wsServer.on('connection', function(connection) {
        // Generate a unique code for every user
        const userId = uuidv4();
        console.log(`Recieved a new connection.`);
        console.log(`${userId} connected.`);
        connection.on('user_login', (username) => {
            console.log(username)
        })
      });
});
}