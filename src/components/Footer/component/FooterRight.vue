<script setup>
import { useControlsStore } from "@/store/index.js";
const controlsStore = useControlsStore();

function isShowPlayList() {
  controlsStore.is_show_play_list = !controlsStore.is_show_play_list;
}
function isShowSetiing() {
  controlsStore.is_show_setiing = !controlsStore.is_show_setiing;
}

function isShowGit() {
  controlsStore.is_show_git = !controlsStore.is_show_git;
}
</script>

<template>
  <div class="footer-right">
    <div class="icon-img">
      <!-- 设置 -->
      <img
        @click="isShowSetiing"
        src="@/assets/svg/fot-r/8666615_settings_icon.svg"
        :class="{ active: controlsStore.is_show_setiing }"
        alt=""
      />
      <!-- git -->
      <img
        @click="isShowGit"
        :class="{ active: controlsStore.is_show_git }"
        src="@/assets/svg/fot-r/8666686_github_icon.svg"
        alt=""
      />
      <!-- 歌单 -->
      <img
        @click="isShowPlayList"
        :class="{ active: controlsStore.is_show_play_list }"
        src="@/assets/svg/fot-r/8666762_grid_shape_icon.svg"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-right {
  width: 100%;
  flex: 2;

  .icon-img {
    height: 100%;
    @include box-center;

    img {
      margin: 0 1.3333vw;
      cursor: pointer;
      padding: 3px;
      transition: all 0.3s;
      // background-color: aqua;
      border-radius: 3px;
    }
  }
}

.active {
  transform: translateY(-5px);
  background-color: $hover;
}
@media screen and (max-width: 765px) {
  .footer-right {
    flex: 1;
  }
}
</style>
