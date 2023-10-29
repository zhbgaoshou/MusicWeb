<script setup></script>

<template>
  <div class="base-info-card">
    <slot> 暂无设置 </slot>
  </div>
</template>

<style scoped lang="scss">
.base-info-card {
  position: absolute;
  right: -300px;
  bottom: $f-height;
  z-index: 3;
  width: max-content;
  height: max-content;
  padding: 1.3333vw;
  transition: all 0.3s;
  @include card-style;
}
</style>
