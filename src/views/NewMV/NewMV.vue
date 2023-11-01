<script setup>
import { reactive } from "vue";
import BaseNav from "@/base/BaseNav.vue";
import BaseMVCardGrid from "@/base/BaseMVCardGrid.vue";
import { useNewMVStore } from "@/store/index";
const newMVStore = useNewMVStore();

newMVStore.getNewMVList();

const navList = reactive(["全部", "欧美", "华语", "流行", "说唱", "摇滚"]);
</script>

<template>
  <div class="newmv">
    <BaseNav class="rec-nav" :navList="navList"></BaseNav>

    <BaseMVCardGrid>
      <BaseMVCard
        v-for="data in newMVStore.newMVList"
        :key="data.id"
        :image="data.cover"
        :name="data.name"
        :artist="data.artists[0].name"
      ></BaseMVCard>
    </BaseMVCardGrid>
  </div>
</template>

<style scoped lang="scss">
.newmv {
  padding-right: 5px;
  height: 100%;
}
</style>
