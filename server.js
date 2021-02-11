const http = require("http");
const express = require("express");

const app = express();
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);
io.on("connection", (socket) => {
  console.log("Connected with socket id=", socket.id);
  socket.on("msg_send", (data) => {
    io.emit("msg_rcvd", data);
  });
});
app.use("/", express.static(__dirname + "/public"));

server.listen(3000, () => {
  console.log("Started on http://localhost:3000");
});
