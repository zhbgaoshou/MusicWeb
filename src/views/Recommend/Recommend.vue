<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import BaseSongCard from "@/base/BaseSongCard.vue";
import BaseNav from "@/base/BaseNav.vue";

const router = useRouter();

function goDetail(song_id) {
  router.push({
    name: "songdetail",
    query: {
      song_id,
    },
  });
}
const navList = reactive(["全部", "欧美", "华语", "流行", "说唱", "摇滚"]);
</script>

<template>
  <div class="rec">
    <div @click="goDetail(1)" class="goods">
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
          <span class="info-two">
            <img src="@/assets/svg/8666816_youtube_video_icon.svg" alt="" />
            100w</span
          >
        </div>
      </div>
    </div>
    <BaseNav class="rec-nav" :navList="navList"></BaseNav>
    <BaseSongCard :dataList="30" fy="true"> </BaseSongCard>
  </div>
</template>

<style scoped lang="scss">
.rec {
  padding-right: 5px;
  height: 100%;

  .rec-nav {
    display: flex;
    justify-content: end;
  }

  .goods {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 26.6667vw;
    margin-bottom: 1.3333vw;
    @include card-style;

    .content-item {
      height: 24vw;
      width: 100%;
      padding: 1.3333vw;

      .info {
        display: flex;
        justify-content: space-between;
        font-size: 1.8667vw;
        color: $t-color;

        .info-two {
          @include vertical-center;

          img {
            width: 2.6667vw;
            height: 2.6667vw;
            margin-right: 0.6667vw;
          }
        }
      }

      .tag {
        font-size: 1.6vw;
        width: max-content;
        padding: 0.6667vw;
        border-radius: 1.3333vw;
        border: 1px solid #eee;
      }

      .title {
        margin-top: 1.3333vw;
      }

      .miaoshu {
        @include ell-mline(3);
        margin: 1.3333vw 0;

        font: {
          size: 1.6vw;
        }
      }
    }

    img {
      width: 24vw;
      height: 24vw;
    }
  }
  .fy {
    display: flex;
    justify-content: end;
    height: max-content;
    margin-top: 10px;
  }
}
</style>
