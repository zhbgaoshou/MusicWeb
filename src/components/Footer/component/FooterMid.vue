<script setup>
import { useControlsStore, useMusicStore } from "@/store/index";
import { ref, computed, watch } from "vue";
import { useNext } from "@/hook/index";
import bus from "@/mitt/index";
import Audio from "../../Audio/Audio.vue";
const controlsStore = useControlsStore();
const musicStore = useMusicStore();

function openLyric() {
  controlsStore.is_show_lyric = !controlsStore.is_show_lyric;
}

function up() {
  musicStore.curIndex == 0 ? ElMessage("这是第一首0.0") : musicStore.curIndex--;
}

const pBox = ref(null);
let _pWidth = ref(0);
let isDragging = ref(false);

function mDown(e) {
  isDragging.value = true;
  const DOM = e.target;
  const parentDOM = pBox.value;
  let x = e.offsetX;
  let parentWidth = parentDOM.offsetWidth;
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", mUp);

  function move(e) {
    if (isDragging.value) {
      let pageX = e.pageX - parentDOM.offsetLeft;
      let w = (pageX - x) / parentWidth;
      _pWidth.value = w;
    }
  }

  function mUp() {
    isDragging.value = false;
  }
}

// function changeProgress(event) {
//   console.log(isDragging.value);
//   if (isDragging.value) return; // 如果是拖动状态，则不执行后续逻辑
//   let parentWidth = pBox.value.offsetWidth;
//   let pageX = event.pageX - event.target.offsetLeft;
//   _pWidth.value = pageX / parentWidth;
//   console.log("event");
// }

const pWidth = computed(() => {
  return _pWidth.value * 100 + "%";
});
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
        <!-- 上一首 -->
        <img
          @click="up()"
          src="@/assets/svg/player/8666732_skip_back_icon.svg"
          alt=""
        />
        <!-- 播放/暂停 -->
        <img
          v-if="!musicStore.playIcon"
          @click="bus.emit('isPlay')"
          src="@/assets/svg/player/8666551_play_circle_icon.svg"
          alt=""
        />

        <img
          v-else
          @click="bus.emit('isPlay')"
          src="@/assets/svg/player/8666549_pause_circle_icon.svg"
          alt=""
        />

        <!-- 下一首 -->
        <img
          @click="useNext()"
          src="@/assets/svg/player/8666733_skip_forward_icon.svg"
          alt=""
        />
      </div>
    </div>
    <div class="p-box" ref="pBox">
      <div class="progress" :style="{ width: pWidth }">
        <div class="bar" @mousedown.stop="mDown">03:01</div>
      </div>
    </div>

    <Audio></Audio>
  </div>
</template>

<style scoped lang="scss">
.footer-mid {
  padding: 0 1.3333vw;
  width: 100%;
  flex: 4;

  .palyer {
    margin-top: 3px;
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
    padding: 2px 0;
    width: 100%;
    margin-top: 8px;
    border-radius: 2px;
    @include vertical-center();
    .progress {
      position: relative;
      height: 3px;
      width: 100px;

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
