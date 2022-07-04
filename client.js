const net = require("net");
const {setupInput} = require('./input.js');
const {IP, PORT} = require('./constants.js');


const conn = net.createConnection({
  host: IP,
  port: PORT
});


conn.setEncoding("utf8");


conn.on("data", (messageToClient) => {
  console.log(`Name:${messageToClient}`);
});


conn.on("data", () => {
  console.log("you ded cuz u idled");
});


console.log("Connecting ...");
console.log("Hello server: I'am client");

setupInput(conn);