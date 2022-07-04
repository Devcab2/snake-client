const net = require('net');
const { stdin, stdout } = require('process');
const port = 50541;
const server = net.createServer();

server.on('connection', (client) => {
  console.log('Successfully connected to game server');

  client.write('Name:CAB');
});

server.listen(port, () => {
  console.log(`The server is listening on port:${port}`);
});


// server -> object that represents the server that we created with (net.createServer())
// server.on -> A function that is telling our server to listen for events
// 'connection' -> The event type. Name of the event type
// (client) => { ... } -> Function that will run after a client connects to the server

//connection.on('data', (messageFromClient) => {
//  console.log('The client says:', messageFromClient);
 
//connection.setEncoding('utf-8',);
//});

// stdin -> Object representing terminal input
// stdin.on -> A function inside of stdIn that sets up the event listener
// 'data' -> the type of event. Event type 'data' will return stdin data

// handleUserInput -> A function that exits the progream if a key is pressed
//'data

