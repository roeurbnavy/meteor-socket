import { io } from "socket.io-client";
// import { reactive } from 'vue'

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const socket = io(URL);

// export const state = reactive({
//   connected: false
// })

// socket.on('connect', () => {
//   state.connected = true;
// })

// socket.on('disconnect', () => {
//   state.connected = false;
// })