const net = require("net");
const {IP, PORT} = require('./constants.js');

const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write("Name:  CAB");
  });


  conn.on("end", () => {
    console.log("Game Over");
  });

  return conn;
};

module.exports = { connect };