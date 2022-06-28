const net = require("net");

// esablish a conection to game server

const connect = function() {
  const conn = net.createConnection({

    host: '192.168.1.81',
    port: 50541

  });
  // interepret data as incoming text
  conn.setEncoding("utf8");
  
  // log a message to the client after recieiving data
  conn.on("data", () => {
    console.log("you ded cuz u idled");
  });
  return conn;
};

console.log("Connecting ...");
connect();