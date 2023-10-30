<script setup>
import BaseMVCard from "../../base/BaseMVCard.vue";
import BaseSongCardVue from "../../base/BaseSongCard.vue";
import BaseMusicCard from "@/base/BaseMusicCard.vue";
</script>

<template>
  <div class="search">
    <div class="search-head">
      <h4>天后</h4>
      <span>共10000条</span>
    </div>

    <div class="search-main">
      <el-tabs model-value="first" @tab-click="handleClick">
        <el-tab-pane label="单曲" name="first">
          <BaseMusicCard :dataList="10" fy="1"></BaseMusicCard>
        </el-tab-pane>
        <el-tab-pane label="歌单" name="second">
          <BaseSongCardVue :data-list="10" fy="1"></BaseSongCardVue>
        </el-tab-pane>
        <el-tab-pane label="MV" name="third">
          <BaseMVCard :data-list="10" fy="1"></BaseMVCard>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search {
  padding-right: 10px;
  .search-head {
    height: max-content;
    padding: 1.3333vw 0;
    display: flex;
    margin-bottom: 20px;

    h4 {
      margin-right: 10px;
    }
  }
}
</style>
