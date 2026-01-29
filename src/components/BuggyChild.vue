<script setup>
import { ref } from "vue";

const count = ref(0);

function crash() {
  throw new Error("Child component bị crash 💥");
}
</script>

<template>
  <button @click="crash">Click là sập component con</button>
</template>
