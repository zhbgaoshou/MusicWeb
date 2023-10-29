<script setup></script>

<template>
  <div class="content" id="content">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.content {
  flex-grow: 1;
  flex-basis: 0;
  height: 90%;
  margin: 0 1.3333vw;
  overflow: auto;
}
</style>
