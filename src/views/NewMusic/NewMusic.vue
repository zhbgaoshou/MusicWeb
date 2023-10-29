<script setup>
import { reactive } from "vue";
import BaseMusicCard from "@/base/BaseMusicCard.vue";
import BaseNav from "@/base/BaseNav.vue";

const navList = reactive(["全部", "欧美", "华语", "流行", "说唱", "摇滚"]);
</script>

<template>
  <div class="newmusic">
    <BaseNav class="rec-nav" :navList="navList"></BaseNav>

    <BaseMusicCard :dataList="100"></BaseMusicCard>
  </div>
</template>

<style scoped lang="scss">
.newmusic {
  padding-right: 5px;
  height: 100%;
}
</style>
