<script setup>
import BaseMusicCard from "@/base/BaseMusicCard.vue";
</script>

<template>
  <div class="dis-music">
    <h4>发现音乐</h4>
    <BaseMusicCard :dataList="10"></BaseMusicCard>
  </div>
</template>

<style scoped lang="scss">
.dis-music {
  h4 {
    margin: 2.6667vw 0;
  }
}
</style>
