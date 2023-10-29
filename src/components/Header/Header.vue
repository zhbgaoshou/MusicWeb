<script setup>
import HeaderLeft from "./component/HeaderLeft.vue";
import HeaderRight from "./component/HeaderRight.vue";
</script>

<template>
  <div class="header" id="head">
    <HeaderLeft />
    <HeaderRight />
  </div>
</template>

<style scoped lang="scss">
.header {
  @include vertical-center;
  justify-content: space-between;
  flex-basis: $h-height;
  background-color: $hd-bg-color;
  min-height: 50px;
  max-height: 50px;
}
</style>
