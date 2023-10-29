<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let is_show_search = ref(false);
const keyword = ref("");

function goSearch() {
  if (!keyword.value)
    return ElMessage({
      message: "搜索内容为空ꈍ◡ꈍ",
      type: "warning",
    });
  router.push({
    name: "search",
    query: {
      keyword: keyword.value,
    },
  });

  keyword.value = "";
  is_show_search.value = false;
}
</script>

<template>
  <div class="header-right">
    <div class="search">
      <input
        type="text"
        v-model="keyword"
        placeholder="今天想听什么音乐0_0"
        @focus="is_show_search = true"
        @keyup.enter="goSearch"
      />
      <div @click="goSearch" class="s-btn">
        <img src="@/assets/svg/header/8666693_search_icon.svg" alt="" />
      </div>
      <el-card v-if="is_show_search" class="box-card">
        <template #header>
          <div class="card-header">
            <span>搜索历史</span>
            <div>
              <img src="@/assets/svg/8666597_del_2_icon.svg" alt="" />
              <img
                @click="is_show_search = false"
                src="@/assets/svg/8666595_x_icon.svg"
                alt=""
              />
            </div>
          </div>
        </template>

        <el-empty description="空空如也" />
      </el-card>
    </div>
    <img src="@/assets/svg/header/8666594_slack_icon.svg" alt="" />
  </div>
</template>

<style scoped lang="scss">
.header-right {
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 70%;
  .search {
    @include vertical-center;
    position: relative;
    flex: 1;
    height: 100%;
    border: 1px solid #ededed;
    border-radius: 1.3333vw;

    .box-card {
      position: absolute;
      left: 0;
      top: $h-height;
      width: 100%;
      z-index: 2;

      .card-header {
        display: flex;
        justify-content: space-between;
      }
    }

    .s-btn {
      @include box-center;
      cursor: pointer;
      height: 100%;
      border-radius: 5px;

      &:hover {
        background-color: $hover;
      }
    }

    input {
      flex: 1;
      background-color: transparent;
      outline: 0;
      border: 0;
      padding-left: 2vw;
    }
  }

  img {
    width: 20px;
    height: 20px;
    margin: 0 1.3333vw;
  }
}
</style>
