<script setup>
import { computed } from "vue";
import { useControlsStore } from "@/store/index";
const controlsStore = useControlsStore();

const r = computed(() => (controlsStore.is_show_play_list ? "0" : "-300px"));
</script>

<template>
  <div class="p-list" :style="{ right: r }">
    <div class="title">
      <h4>播放列表</h4>
    </div>
    <div class="content">
      <div class="song-item" v-for="i in 100">
        <span>01</span>
        <span>songnamesongname</span>
        <i></i>
        <span>name</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.p-list {
  position: absolute;
  bottom: $f-height;
  z-index: 3;
  right: 0;
  width: 300px;
  height: $p-height;
  transition: all 0.3s;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: -2px 2px 2px #eee;
  .title {
    padding: 10px;
    height: 10%;
    border-bottom: 1px solid #eee;
  }

  .content {
    height: 90%;
    overflow: scroll;

    .song-item {
      display: flex;
      align-items: center;
      padding: 20px;
      border-bottom: 1px solid #eee;

      &:hover {
        background-color: #f3b8b8;
      }

      i {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #eee;
      }

      span {
        margin: 0 10px;
        max-width: 80px;
        @include ell-line;
        cursor: pointer;

        &:nth-of-type(1) {
          font-size: 12px;
          color: #e2e1e1;
        }
        &:nth-of-type(2) {
          font-size: 18px;
          color: #8b8b8b;
        }

        &:nth-of-type(3) {
          font-size: 14px;
          color: #b3b3b3;
        }
      }
    }
  }
}
</style>
