<script setup>
import { useControlsStore } from "@/store/index";
const controlsStore = useControlsStore();
</script>

<template>
  <div class="lyric" :class="{ 'open-height': controlsStore.is_show_lyric }">
    <div class="lyric-left">
      <div class="cover"></div>
    </div>
    <div class="lyric-right">
      <div class="l-r-h">
        <h6>Bread and Bed/面包与床</h6>
        <span>歌手： Y-0 椰林/李烨航</span>
      </div>

      <div class="l-main">
        <p v-for="i in 100">发大水发生大范德萨范德萨发打撒</p>

        <p>发大水发生大范德萨范德萨发打撒</p>
        <p>发大水发生大范德萨范德萨发打撒</p>
        <p>发大水发生大范德萨范德萨发打撒</p>
        <p>发大水发生大范德萨范德萨发打撒</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lyric {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  bottom: $f-height;
  transition: all 0.3s;
  width: 100vw;
  height: 0;
  background-color: #fff;

  .lyric-left {
    flex: 1;
    width: 100%;
    @include box-center();

    .cover {
      position: relative;
      width: 40vw;
      height: 40vw;
      border-radius: 50%;
      border: 6.6667vw solid #252525ee;
      background: url("@/assets/images/swiper/one/v12.jpg");
      background-size: cover;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 42vw;
        height: 42vw;
        z-index: -1;
        border-radius: 50%;
        background-color: #828282;
      }
    }
  }

  .lyric-right {
    flex: 1;
    width: 100%;
    // @include box-center;

    .l-r-h {
      text-align: center;
      height: max-content;
      padding: 20px;
      h6 {
        margin-bottom: 10px;
      }

      span {
        color: $t-color;
        margin-top: 20px;
      }
    }
    .l-main {
      overflow: scroll;
      text-align: center;
      height: 40vw;

      p {
        margin: 15px 0;
        font-size: 12px;
        color: $t-color;
      }
    }
  }
}

.open-height {
  height: $p-height;
}

@media screen and (max-width: 765px) {
  .lyric {
    flex-direction: column;
  }

  .lyric-right {
    margin-top: 20px;
  }
}
</style>
