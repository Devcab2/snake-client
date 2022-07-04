const net = require("net");
const {setupInput} = require('./input.js');

const conn = net.createConnection({
  host: '192.168.1.81',
  port: 50541
});

conn.setEncoding("utf8");

conn.on("data", (messageToClient) => {
  console.log(`Name:${messageToClient}`);
});

setupInput(conn);

conn.on("data", () => {
  console.log("you ded cuz u idled");
});

console.log("Connecting ...");
console.log("Hello server: I'am client");




/*
conn.on("data", () => {
  setInterval(() => {
    console.log("Move: up");
  }, 50);
  setTimeout(() => {
    console.log("Move: left");
  }, 500);
});
*/
//interface to handle user input via stdin