<script setup></script>

<template>
  <div class="grid-box">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.grid-box {
  display: grid;
  grid-auto-rows: 300px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.333333vw;
}
</style>
