// import { Meteor } from "meteor/meteor";
// import { LinksCollection } from "/imports/api/links";

// async function insertLink({ title, url }) {
//   await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
// }

// Meteor.startup(async () => {
//   console.log("startup");
//   console.log("record", await LinksCollection.find().countAsync());
//   // If the Links collection is empty, add some data.
//   if ((await LinksCollection.find().countAsync()) === 0) {
//     console.log("insert link when startup");
//     await insertLink({
//       title: "Do the Tutorial",
//       url: "https://vuejs.org/guide/quick-start.html",
//     });

//     await insertLink({
//       title: "Follow the Guide",
//       url: "https://guide.meteor.com",
//     });

//     await insertLink({
//       title: "Read the Docs",
//       url: "https://docs.meteor.com",
//     });

//     await insertLink({
//       title: "Discussions",
//       url: "https://forums.meteor.com",
//     });
//   }
// });

import "/imports/api";

// // import { createServer } from "http";
// import { WebApp } from "meteor/webapp";
// import { Server } from "socket.io";

// // const server = createServer();
// export const io = new Server(WebApp.httpServer, {
//   cors: {
//     origin: "*",
//     // allowedHeaders: ["my-custom-header"],
//     credentials: true,
//   },
// });

// let counter = 0;
// io.on("connection", (socket) => {
//   console.log(`user ${socket.id} is connected.`);

//   io.emit("clientId", socket.id);

//   // socket.emit("counter", counter);
//   socket.on("counter1", function (value) {
//     console.log(`counter changed on client: ${value}`);
//     // if (counter != value) {
//     io.emit("counter", (counter = value));
//     // }
//   });
// });
