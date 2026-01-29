<script setup>
import { ref, onErrorCaptured } from "vue";
import BuggyChild from "./BuggyChild.vue";
// https://chatgpt.com/share/697b3640-13f8-800b-bff4-4256f48f8dbc
const error = ref(null);

onErrorCaptured((err, instance, info) => {
  console.error("Bắt được lỗi:", err);
  console.log("Từ component:", instance);
  console.log("Info:", info);

  error.value = err.message;

  // return false => CHẶN không cho lỗi bubble lên global
  return false;
});
</script>

<template>
  <div class="box">
    <h2>Parent Component</h2>

    <div v-if="error" class="error">⚠️ Có lỗi xảy ra: {{ error }}</div>

    <BuggyChild v-else />
  </div>
</template>
