import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected');

  ws.on('message', (message: string) => {
    console.log(`Received message: ${message}`);
    ws.send(`Hello, you sent: ${message}`);
  });
});
