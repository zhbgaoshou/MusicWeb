import { reactive, toRefs } from "vue";
import { reqRecSongList } from "@/api/musicApi";

export default () => {
  const state = reactive({
    recommendList: [],
  });
  const methods = reactive({
    getRecSongList,
  });

  async function getRecSongList(limit = 30, before = "", cat = "流行") {
    try {
      const ret = await reqRecSongList(limit, before, cat);
      state.recommendList = ret.playlists;
    } catch (error) {
      console.log(
        ElMessage({
          showClose: true,
          message: "推荐歌单请求失败",
          center: true,
          type: "error",
        })
      );
    }
  }

  return {
    ...toRefs(methods),
    ...toRefs(state),
  };
};
