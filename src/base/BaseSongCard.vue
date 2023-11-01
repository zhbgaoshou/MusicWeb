<script setup>
const props = defineProps(["txt", "image"]);
</script>

<template>
  <div style="cursor: pointer">
    <div class="grid-item">
      <img :src="props.image" alt="" />
      <p class="txt">
        {{ props.txt }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid-item {
  height: 100%;
  @include card-style;

  img {
    @include img-style(10px 10px 0 0);
    height: 80%;
  }
}

.txt {
  // margin: 10px;
  padding: 10px;
  font-size: 12px;
  color: $t-color;
  line-height: 20px;
  @include ell-line();
}
</style>
