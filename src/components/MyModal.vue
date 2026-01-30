<template>
  <div>
    <button @click="openModal">Open Modal</button>

    <Teleport to="body" :disabled="true">
      <div v-if="isOpen" class="my-modal">
        <p>Hello from the modal!</p>
        <button @click="closeModal">Close</button>
      </div>
    </Teleport>
    <Teleport defer to="#modals">
      <div>A</div>
    </Teleport>
    <Teleport defer to="#modals">
      <div>B</div>
    </Teleport>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const isOpen = ref(false);
const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};
</script>
<style scoped>
.my-modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background: white;
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
