// import {createServer} from 'http'
import { WebApp } from "meteor/webapp";
import { Server } from "socket.io";

// const server = createServer();

export const io = new Server(WebApp.httpServer, {
  cors: {
    origin: "*",
    // allowedHeaders: ["my-custom-header"],
    // credentials: true,
  },
});

// let counter = 0;
io.on("connection", (socket) => {
  console.log(`connection id ${socket.id}`);
  socket.join("serverLoading")
});

io.on("disconnect", (socket) => {
  console.log('disconnect', socket);
})
export const sockets = io.sockets.in("serverLoading")

