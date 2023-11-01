<script setup></script>

<template>
  <div class="grid-box">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.grid-box {
  display: grid;
  grid-auto-rows: 60px;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 1.33333vw;
}

@media screen and (max-width: 765px) {
  .grid-box {
    grid-template-columns: 1fr !important;
  }
}
</style>
