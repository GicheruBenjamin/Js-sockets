import { WebSocketServer } from 'ws';

// Create a WebSocket server on port 8080
const wss = new WebSocketServer({ port: 8080 });

console.log('WebSocket server is running on ws://localhost:8080');

// Listen for client connections
wss.on('connection', (ws) => {
    console.log('A client connected');

    // Listen for messages from the client
    ws.on('message', (message) => {
        console.log('Received from client:', message);
        // Echo the message back to the client
        ws.send(`Server received: ${message}`);
    });

    // Send a welcome message when a client connects
    ws.send('Welcome to the WebSocket server!');
});
