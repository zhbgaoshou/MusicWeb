<script setup>
const props = defineProps(["IDX", "image", "songName", "singer", "playTime"]);
</script>

<template>
  <div class="grid-item">
    <span class="frist-span">{{ props.IDX }}</span>
    <img :src="props.image" alt="" />
    <span>{{ props.songName }}</span>

    <span>{{ props.singer }}</span>

    <span>{{ props.playTime }}</span>
  </div>
</template>

<style scoped lang="scss">
.grid-item {
  @include vertical-center;
  @include card-style(5px);
  justify-content: space-between;

  img {
    height: 40px;
    width: 40px;
    border-radius: 8px;
  }

  span {
    width: 13.3333vw;
    margin: 0 1.3333vw;
    @include ell-line;
    font-size: 12px;
    color: $t-color;
  }

  .frist-span {
    flex-basis: 6.6667vw;
  }
}
</style>
