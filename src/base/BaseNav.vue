<script setup>
const props = defineProps(["navList"]);
</script>

<template>
  <div class="base-nav">
    <span class="nav-item" v-for="nav in navList" :key="nav">{{ nav }}</span>
  </div>
</template>

<style scoped lang="scss">
.base-nav {
  margin: 1.3333vw;

  .nav-item {
    padding: 0.6667vw;
    cursor: pointer;
    font-size: 1.6vw;
    border-radius: 10px;

    &:hover {
      background-color: rgb(246, 109, 109);
    }
  }
}
</style>
