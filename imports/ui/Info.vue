<script setup>
import { onMounted, ref } from "vue";
import { socket } from "/imports/socket";

const links = ref([]);
const loadinBar = ref(0);

const fetchData = () => {
  Meteor.call("fetchData", (err, res) => {
    if (err) {
      console.log("err", err);
    } else {
      links.value = res;
    }
  });
};

// remove any existing listeners (in case of hot reload)
socket.off();

socket.on("insertLinkId", (value) => {
  console.log("data from server", value);
  loadinBar.value = value;
});

const insertData = () => {
  // loadinBar.value = 0;
  // socket.connect();

  const doc = {
    title: "Hello",
    // url: "http://localhost:3000",
    date: new Date(),
    status: "Open",
  };
  // {...doc} = {title:...,url:....}
  Meteor.call("insertLink", { doc }, (err, res) => {
    if (err) {
      console.log("err insert", err);
    } else {
      // console.log("inserted", res);
      // socket.disconnect();
      fetchData();
    }
  });
};

const updateData = () => {
  const doc = {
    _id: "5DEZkgyBxjgEKLGYs",
    title: "Hello",
    url: "http://localhost:3000",
  };
  Meteor.call("updateLink", { ...doc }, (err, res) => {
    if (err) {
      console.log("err insert", err);
    } else {
      console.log("inserted", res);
      fetchData();
    }
  });
};
const removeData = () => {
  const doc = {
    _id: "oivPRxer7mLRXKGBA",
  };
  Meteor.call("removeLink", { ...doc }, (err, res) => {
    if (err) {
      console.log("err insert", err);
    } else {
      console.log("inserted", res);
      fetchData();
    }
  });
};
onMounted(() => {
  fetchData();
});
</script>

<template>
  <h2 class="text-xl my-6 font-semibold">Learn Meteor!</h2>
  <button
    @click="insertData"
    class="bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded"
  >
    Insert link
  </button>
  <button
    @click="updateData"
    class="bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded ml-2"
  >
    Update link
  </button>
  <button
    @click="removeData"
    class="bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded ml-2"
  >
    Remove link
  </button>
  <br />
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-2 mb-2">
    <div
      class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
      :style="`width: ${loadinBar}%`"
    >
      {{ loadinBar }}%
    </div>
  </div>
  <ul class="list-disc underline">
    <li v-for="link of links" :key="link._id" class="hover:text-green-700">
      <a :href="link.url" target="_blank">{{ link.title }}</a>
    </li>
  </ul>
</template>
