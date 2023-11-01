import { reactive, toRefs } from "vue";
import { reqNewMVList } from "../api/musicApi";
export default () => {
  const state = reactive({
    newMVList: [],
  });
  const methods = reactive({
    getNewMVList,
  });

  async function getNewMVList(
    order = "上升最快",
    area = "全部",
    limit = 30,
    offset = 0
  ) {
    try {
      const ret = await reqNewMVList(order, area, limit, offset);
      state.newMVList = ret.data;
    } catch (error) {
      console.log(
        ElMessage({
          showClose: true,
          message: "新MV请求失败",
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
