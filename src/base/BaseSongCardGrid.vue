<script setup>
const props = defineProps(["fy"]);
</script>

<template>
  <div class="grid-box">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.grid-box {
  display: grid;
  grid-auto-rows: 230px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.3333vw;
}

.fy {
  display: flex;
  justify-content: end;
  height: max-content;
  margin-top: 10px;
}
</style>
