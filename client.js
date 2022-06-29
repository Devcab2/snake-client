const net = require("net");

const conn = net.createConnection({

  host: '192.168.1.81',
  port: 50541

});
 
conn.setEncoding("utf8");
  
conn.on("data", (messageToClient) => {
  console.log(`Name:${messageToClient}`);
  console.log("you ded cuz u idled");
});

console.log("Connecting ...");

conn.write("Hello server: I'am client");