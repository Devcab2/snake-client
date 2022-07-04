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