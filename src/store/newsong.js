import { reactive, toRefs } from "vue";
import { reqNewMusicList } from "@/api/musicApi";
export default () => {
  const state = reactive({
    newSongList: [],
  });
  const methods = reactive({
    getNewSongList,
  });

  async function getNewSongList(type = 0) {
    try {
      const ret = await reqNewMusicList(type);
      state.newSongList = ret.data;
    } catch (error) {
      console.log(
        ElMessage({
          showClose: true,
          message: "新音乐请求失败",
          center: true,
          type: "error",
        })
      );
    }
  }

  return {
    ...toRefs(state),
    ...toRefs(methods),
  };
};
