<template>
  <div>
    <div
      v-if="destinationObj.isLoading"
      class="d-flex justify-content-center align-items-center"
    >
      <Loader />
    </div>
    <!-- <div v-for="user in userObj.users" :key="user.id">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
    </div> -->
    <div class="container p-4 bg-white" v-else>
      <div class="text-success text-center">
        <h2>Destination List</h2>
      </div>
      <hr />
      <table class="table table-striped table-light">
        <thead>
          <tr>
            <th>Name</th>
            <th>Day</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="destination in destinationObj.destination"
            :key="destination.id"
          >
            <td>{{ destination.name }}</td>
            <td>{{ destination.days }}</td>
            <td>{{ destination.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <button @clickdata="fetchUsers">Fetch Users</button> -->
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import Loader from "./components/Loader.vue";
const userObj = reactive({
  users: [],
});
const destinationObj = reactive({
  destination: [],
  isLoading: false,
});
function fetchUsers() {
  userObj.users = [];
}
onMounted(() => {
  loadDestination();
});
function loadUsers() {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    userObj.users = response.data;
  });
}
function loadDestination() {
  destinationObj.isLoading = true;
  axios.get("http://localhost:3000/destination").then((response) => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }).then(() => {
      destinationObj.destination = response.data;
      destinationObj.isLoading = false;
    });
  });
}
</script>
