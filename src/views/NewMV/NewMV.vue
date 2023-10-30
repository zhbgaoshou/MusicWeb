<script setup>
import { reactive } from "vue";
import BaseNav from "@/base/BaseNav.vue";
import BaseMVCard from "@/base/BaseMVCard.vue";

const navList = reactive(["全部", "欧美", "华语", "流行", "说唱", "摇滚"]);
</script>

<template>
  <div class="newmv">
    <BaseNav class="rec-nav" :navList="navList"></BaseNav>

    <BaseMVCard :dataList="30" fy="yes"></BaseMVCard>
  </div>
</template>

<style scoped lang="scss">
.newmv {
  padding-right: 5px;
  height: 100%;
}
</style>
