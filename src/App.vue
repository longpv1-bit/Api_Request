<template>
  <div>
    <div class="outer">
      <h3>Vue Teleport Example</h3>
      <div id="modals"></div>
      <!-- Component con (MyModal) được mount TRƯỚC khi DOM của component cha hoàn tất -->
      <MyModal />
    </div>
  </div>
</template>
<script setup>
import MyModal from "./components/MyModal.vue";
</script>
<style scoped>
.outer {
  /* position: fixed bên modal BỊ PHÁ khi ancestor có transform 
  Ancestor = phần tử cha, cha của cha, cha của cha của cha…*/
  /* hoặc translate / animation */
  transform: scale(1);
}
</style>
