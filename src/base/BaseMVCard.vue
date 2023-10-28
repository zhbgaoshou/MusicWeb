<script setup>
const props = defineProps(["dataList"]);
</script>

<template>
  <div class="grid-box">
    <div v-for="i in props.dataList">
      <div class="grid-item">
        <img src="@/assets/images/swiper/one/v15.jpg" alt="" />
      </div>
      <p>名字</p>
      <p>作者</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid-box {
  display: grid;
  grid-auto-rows: 300px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.333333vw;

  .grid-item {
    height: 80%;
    @include card-style;
    img {
      @include img-style();
    }
  }

  p {
    font-size: 18px;
    margin: 5px;
    color: $t-color;
  }
}
</style>
