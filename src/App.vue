<template>
  <div>
    <div
      v-if="isLoading"
      class="d-flex justify-content-center align-items-center"
    >
      <Loader />
    </div>
    <div v-else-if="error">
      <p class="text-danger">
        {{ error.message || "Something went wrong" }}
      </p>
    </div>
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
          <tr v-for="destination in destinations" :key="destination.id">
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
import { onMounted, reactive } from "vue";
import Loader from "./components/Loader.vue";
import { useFetch } from "./composables/useFetch.js";
const {
  data: destinations,
  isLoading,
  error,
  fetchData,
} = useFetch("http://localhost:3000/destination");

onMounted(() => {
  fetchData();
});
</script>
