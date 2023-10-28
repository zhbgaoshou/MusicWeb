<script setup>
import Aside from "./component/Aside/Aside.vue";
import Content from "./component/Content/Content.vue";
</script>

<template>
  <div class="main">
    <Aside></Aside>
    <Content></Content>
  </div>
</template>

<style scoped lang="scss">
.main {
  flex-grow: 1;
  @include vertical-center;
  overflow: hidden;
}
</style>
