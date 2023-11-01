import { reactive, toRefs } from "vue";
import { reqRec, reqRecMV, reqRecNewSong } from "@/api/musicApi";

export default () => {
  const state = reactive({
    discoverRecList: [],
    discoverRecMVList: [],
    discoverRecNewSongList: [],
  });
  const methods = reactive({
    getDiscoverRecList,
    getDiscoverRecMVList,
    getDiscoverRecNewSongList,
  });

  /**
   * 发现页推荐歌单
   * @param {Number} limit 每次请求回来多少条数据
   */
  async function getDiscoverRecList(limit) {
    try {
      const ret = await reqRec(limit);
      state.discoverRecList = ret.result;
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

  /**
   * 发现页推荐MV
   */
  async function getDiscoverRecMVList() {
    try {
      const ret = await reqRecMV();
      state.discoverRecMVList = ret.result;
    } catch (error) {
      console.log(
        ElMessage({
          showClose: true,
          message: "推荐MV请求失败",
          center: true,
          type: "error",
        })
      );
    }
  }

  /**
   * 发现页推荐MV
   */
  async function getDiscoverRecNewSongList() {
    try {
      const ret = await reqRecNewSong();
      state.discoverRecNewSongList = ret.result;
    } catch (error) {
      console.log(
        ElMessage({
          showClose: true,
          message: "推荐新音乐请求失败",
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
