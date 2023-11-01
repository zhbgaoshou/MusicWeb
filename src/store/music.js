import { ref, computed, watch } from "vue";

export default () => {
  let playList = ref([
    {
      url: "http://music.163.com/song/media/outer/url?id=2069199929.mp3",
      name: "张敬轩",
      songname: "断点",
    },
    {
      url: "http://music.163.com/song/media/outer/url?id=31877628.mp3",
      name: "陈奕迅",
      songname: "十年",
    },
  ]); //播放列表
  let curIndex = ref(-1); //当前歌曲的下标，用来控制上/下一首
  let curSong = ref({}); //当前歌曲，用来计算src
  let playIcon = ref(false); // 控制播放图标

  const src = computed(() => {
    return curSong.value?.url;
  });

  watch(curIndex, (newIndex) => {
    curSong.value = playList.value[newIndex];
    playIcon.value = true;
  });

  return {
    playList,
    curIndex,
    curSong,
    playIcon,
    src,
  };
};
