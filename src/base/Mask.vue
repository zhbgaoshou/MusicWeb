<script setup></script>

<template>
  <Teleport to="body">
    <div class="mask">
      <slot></slot>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.mask {
  position: absolute;
  top: 0;
  z-index: 4;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: aqua;
}
</style>
