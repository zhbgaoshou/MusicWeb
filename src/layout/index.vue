<script setup>
import Footer from "@/components/Footer/Footer.vue";
import Main from "@/components/Main/Main.vue";
import Header from "@/components/Header/Header.vue";
import PlayList from "../components/PlayList/PlayList.vue";
import BaseInfoCard from "../base/BaseInfoCard.vue";
import Lyric from "../components/Lyric/Lyric.vue";

import { useControlsStore, usePlayerStore } from "@/store/index";
import { computed } from "vue";

const controlsStore = useControlsStore();
const playerStore = usePlayerStore();

const s_r = computed(() => (controlsStore.is_show_setiing ? "0" : "-110%"));
const g_r = computed(() => (controlsStore.is_show_git ? "0" : "-110%"));

function changeVolume(newVolume) {
  playerStore.volume = newVolume / 100;
  localStorage.setItem("volume", newVolume / 100);
}
</script>

<template>
  <div class="layout" id="layout">
    <Header></Header>
    <Main></Main>
    <PlayList />
    <BaseInfoCard :style="{ right: s_r }">
      <div class="volume">
        <img src="@/assets/svg/fot-r/8666734_volume_2_icon.svg" alt="" />
        <el-slider
          @change="changeVolume"
          style="margin: 0 20px"
          v-model="playerStore.slider_value"
        />
      </div>
      <div class="order">
        <img
          v-if="playerStore.orderPlay === 1"
          @click="playerStore.changeOrder()"
          src="@/assets/svg/order.svg"
          alt=""
        />
        <img
          v-else-if="playerStore.orderPlay === 2"
          @click="playerStore.changeOrder()"
          src="@/assets/svg/player/8666613_sj_icon.svg"
          alt=""
        />
        <img
          v-else
          @click="playerStore.changeOrder()"
          src="@/assets/svg/player/8666728_xh_cw_icon.svg"
          alt=""
        />
        <span class="order-info">{{ playerStore.orderText }}播放</span>
      </div>
    </BaseInfoCard>
    <BaseInfoCard :style="{ right: g_r }">
      <a
        style="display: flex; align-items: center"
        target="_blank"
        href="https://github.com/zhbgaoshou/MusicWeb.git"
      >
        <svg
          height="32"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="32"
          data-view-component="true"
          class="octicon octicon-mark-github v-align-middle color-fg-default"
        >
          <path
            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
          ></path>
        </svg>
        <span style="margin: 0 10px">GitHub</span>
      </a>
    </BaseInfoCard>
    <Lyric></Lyric>
    <Footer></Footer>
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .volume {
    width: 26.6667vw;
    min-width: 200px;
    display: flex;
  }
  .order {
    @include vertical-center;

    .order-info {
      margin-left: 20px;
      padding: 5px;
      font-size: 12px;
      border-radius: 5px;
      border: 1px solid #eee;
    }
  }
}
</style>
