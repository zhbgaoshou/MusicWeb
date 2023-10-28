<script setup>
const props = defineProps(["dataList"]);
</script>

<template>
  <div class="grid-box">
    <slot></slot>
    <div style="cursor: pointer" v-for="data in dataList">
      <div class="grid-item">
        <img src="@/assets/images/swiper/one/v12.jpg" alt="" />
      </div>
      <p class="txt">
        这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid-box {
  display: grid;
  grid-auto-rows: 230px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.3333vw;

  .txt {
    margin: 10px;
    font-size: 14px;
    color: $t-color;
    line-height: 20px;
    @include ell-mline();
  }

  .grid-item {
    height: 80%;
    @include card-style;

    img {
      @include img-style;
    }
  }
}
</style>
