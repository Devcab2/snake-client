const net = require('net');
const port = 50541;
const server = net.createServer();


server.on('connection', (client) => {
  console.log('Successfully connected to game server');

  client.write('Name:CAB');
});


//connection.on('data', (messageFromClient) => {
//  console.log('The client says:', messageFromClient);
 
//connection.setEncoding('utf-8',);
//});


server.listen(port, () => {
  console.log(`The server is listening on port:${port}`);
});


