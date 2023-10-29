<script setup>
import Carousel from "./component/Carousel.vue";
import DisRec from "./component/DisRec.vue";
import DisMusic from "./component/DisMusic.vue";
import DisMV from "./component/DisMV.vue";
</script>

<template>
  <div class="dis" id="dis">
    <Carousel></Carousel>
    <DisRec></DisRec>
    <DisMusic></DisMusic>
    <DisMV></DisMV>
  </div>
</template>

<style scoped lang="scss">
.dis {
  padding-right: 5px;
  height: 100%;
}
</style>
