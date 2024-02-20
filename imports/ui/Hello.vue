<script setup>
import { ref } from "vue";
import { socket } from "/imports/socket";

// remove any existing listeners (in case of hot reload)
// socket.off();

socket.on("connect", () => {
  console.log(`Client connected`);
  socket.on("clientId", (value) => {
    console.log("clientId", value);
  });
});

const count = ref(0);

function increment() {
  count.value++;
  // if (count.value !== serverConnter.value) {
  socket.emit("counter1", count.value);
  // }
}

const serverConnter = ref(count.value);
socket.on("counter", (value) => {
  console.log(`counter changed on server: ${value}`);
  if (serverConnter !== value) {
    serverConnter.value = value;
    count.value = value;
  }
});
</script>

<template>
  <button
    @click="increment"
    class="bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded"
  >
    Click Me
  </button>
  <p>
    You've pressed the button <strong>{{ count }}</strong> times. Server counter
    {{ serverConnter }}
  </p>
</template>
