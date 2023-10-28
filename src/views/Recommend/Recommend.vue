<script setup>
import BaseSongCard from "@/base/BaseSongCard.vue";
</script>

<template>
  <div class="rec">
    <div class="goods">
      <img src="@/assets/images/swiper/one/v14.jpg" alt="" />
      <div class="content-item">
        <div class="tag">
          <p>精品标签</p>
        </div>
        <div class="title">
          <h6>标题</h6>
        </div>

        <div class="miaoshu">
          描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
        </div>

        <div class="info">
          <span>创建者</span>
          <span>播放量</span>
        </div>
      </div>
    </div>
    <BaseSongCard :dataList="30"> </BaseSongCard>
  </div>
</template>

<style scoped lang="scss">
.rec {
  padding-right: 5px;
  height: 100%;

  .goods {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 26.6667vw;
    margin-bottom: 1.3333vw;
    @include card-style;
    .miaoshu {
      @include ell-mline(3);
			
    }

    .content-item {
      height: 24vw;
      width: 100%;
      padding: 1.3333vw;
    }

    img {
      width: 24vw;
      height: 24vw;
    }
  }
}
</style>
