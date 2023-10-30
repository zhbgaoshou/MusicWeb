<script setup>
const props = defineProps(["dataList", "fy"]);
</script>

<template>
  <div class="grid-box">
    <div class="grid-item" v-for="i in props.dataList">
      <span class="frist-span">01</span>
      <img src="@/assets/images/swiper/one/v6.jpg" alt="" />
      <span>歌歌曲歌歌曲歌歌曲歌歌曲歌歌曲歌歌曲歌歌曲</span>

      <span>歌手歌歌曲歌歌曲歌歌曲歌歌曲</span>

      <span>03:01</span>
    </div>
  </div>

  <div class="fy" v-if="props.fy">
    <el-pagination
      small
      background
      pager-count="5"
      layout="prev, pager, next"
      :total="1000"
    />
  </div>
</template>

<style scoped lang="scss">
.grid-box {
  display: grid;
  grid-auto-rows: 60px;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 1.33333vw;

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
}

.fy {
  display: flex;
  justify-content: end;
  height: max-content;
  margin-top: 10px;
}

@media screen and (max-width: 765px) {
  .grid-box {
    grid-template-columns: 1fr !important;
  }
}
</style>
