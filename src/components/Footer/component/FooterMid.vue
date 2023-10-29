<script setup>
import { useControlsStore } from "@/store/index";
const controlsStore = useControlsStore();

function openLyric() {
  controlsStore.is_show_lyric = !controlsStore.is_show_lyric;
}
</script>

<template>
  <div class="footer-mid">
    <div class="palyer">
      <div class="info">
        <!-- 歌曲封面 -->
        <el-tooltip content="对!点我打开/关闭歌词页" effect="light">
          <img
            @click="openLyric"
            src="@/assets/images/swiper/one/v15.jpg"
            alt=""
          />
        </el-tooltip>
      </div>
      <div class="fun" style="display: flex; align-items: center">
        <img src="@/assets/svg/player/8666732_skip_back_icon.svg" alt="" />
        <img src="@/assets/svg/player/8666551_play_circle_icon.svg" alt="" />
        <img src="@/assets/svg/player/8666733_skip_forward_icon.svg" alt="" />
      </div>
    </div>
    <div class="p-box">
      <div class="progress">
        <div class="bar">03:01</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-mid {
  padding: 0 1.3333vw;
  width: 100%;
  flex: 4;

  .palyer {
    margin-top: 5px;
    // @include horizontally-center;
    display: flex;

    .fun {
      margin: 0 auto;
    }
    .info {
      margin: 0 30px;
      margin-left: 10px;
      width: 50px;
      height: 50px;
      img {
        border: 1px solid #eee;
        @include img-style;
        object-fit: cover;
      }
    }
    img {
      cursor: pointer;

      &:nth-of-type(2) {
        width: 40px;
        height: 40px;
        margin: 0 20px;
      }
    }
  }

  .p-box {
    background-color: rgb(212, 213, 213);
    padding: 2px;
    width: 100%;
    margin-top: 5px;
    border-radius: 2px;
    @include vertical-center();
    .progress {
      position: relative;
      height: 3px;
      width: 80%;
      background-color: rgb(28, 197, 197);

      .bar {
        font-size: 12px;
        position: absolute;
        right: -36px;
        top: -9px;
        padding: 2px;
        width: max-content;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        border: 1px solid #eee;
        user-select: none;
        background-color: rgb(98, 238, 238);
      }
    }
  }
}

@media screen and (max-width: 765px) {
  .footer-mid {
    flex: 2;
  }
}
</style>
