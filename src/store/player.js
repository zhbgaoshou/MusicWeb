import { ref, computed } from "vue";

export default () => {
  let playIcon = ref(false); // 控制播放图标

  /**
   * 播放顺序
   * 1：顺序播放
   * 2：循环播放
   * 3: 随机播放
   */
  let orderPlay = ref(1);

  let loop = ref(false); //是否循环播放

  let volume = ref(parseFloat(localStorage.getItem("volume")) || 1);

  let slider_value = computed({
    get() {
      return volume.value * 100;
    },
    set(val) {
      volume.value = val / 100;
    },
  });

  function changeOrder() {
    orderPlay.value === 3 ? (orderPlay.value = 1) : orderPlay.value++;

    orderPlay.value === 2 ? (loop.value = true) : (loop.value = false);
  }
  // 顺序提示文字
  const orderText = computed(() => {
    if (orderPlay.value === 1) {
      return "顺序";
    } else if (orderPlay.value === 2) {
      return "循环";
    } else {
      return "随机";
    }
  });
  return {
    playIcon,
    orderPlay,
    orderText,
    volume,
    changeOrder,
    slider_value,
  };
};
