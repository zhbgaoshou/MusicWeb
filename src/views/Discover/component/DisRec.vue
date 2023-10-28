<script setup>
import BaseSongCard from "@/base/BaseSongCard.vue";
</script>

<template>
  <div class="dis-rec">
    <h4>发现歌单</h4>
    <BaseSongCard :dataList="10"></BaseSongCard>
  </div>
</template>

<style scoped lang="scss">
.dis-rec {
  h4 {
    margin: 2.6667vw 0;
  }
}
</style>
