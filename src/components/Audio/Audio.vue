<script setup>
import { ref, nextTick } from "vue";
import { useMusicStore, usePlayerStore } from "@/store/index";
import { randomIndex } from "@/utils/index";
import bus from "@/mitt/index";
const musicStore = useMusicStore();
const playerStore = usePlayerStore();

const audioDOM = ref(null);

function canplaythrough(event) {
  const audioDOM = event.target;
  audioDOM.play().then(() => {
    ElMessage({
      message: "正在播放...",
      type: "success",
    });
  });
}

nextTick(() => {
  bus.on("isPlay", function () {
    if (audioDOM.value.paused) {
      if (musicStore.playList.length === 0)
        return ElNotification({
          title: "播放失败",
          message: "播放列表为空，请更新您的播放列表",
          type: "error",
        });
      if (!musicStore.src) {
        musicStore.curIndex = 0;
        ElMessage({
          message: "已为您播放列表的第一首歌曲",
          type: "success",
        });
      } else {
        audioDOM.value.play();
        musicStore.playIcon = true;
        console.log("播放中...");
      }
    } else {
      audioDOM.value.pause();
      musicStore.playIcon = false;
      console.log("暂停中...");
    }
  });
});

// 播放顺序
function endNext() {
  if (playerStore.orderPlay === 1) {
    if (musicStore.curIndex == musicStore.playList.length - 1) {
      ElMessage("你的播放列表已经没有更多了^_^");
    } else {
      musicStore.curIndex++;
    }
  } else if (playerStore.orderPlay === 2) {
    playerStore.loop = true;
  } else {
    musicStore.curIndex = randomIndex(musicStore.playList);
  }
}
</script>

<template>
  <audio
    :src="musicStore.src"
    @canplaythrough="canplaythrough"
    ref="audioDOM"
    @ended="endNext"
    :volume="playerStore.volume"
  ></audio>
</template>

<style scoped lang="scss"></style>
