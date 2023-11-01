<script setup>
import BaseSongCardGrid from "@/base/BaseSongCardGrid.vue";
import { useDiscoverStore } from "@/store";
const discoverStore = useDiscoverStore();

import { useRouter } from "vue-router";

const router = useRouter();

function goDetail(song_id) {
  router.push({
    name: "songdetail",
    query: {
      song_id,
    },
  });
}
</script>

<template>
  <div class="dis-rec">
    <h4>发现歌单</h4>
    <BaseSongCardGrid>
      <BaseSongCard
        v-for="data in discoverStore.discoverRecList"
        :key="data.id"
        :txt="data.name"
        :image="data.picUrl"
      ></BaseSongCard>
    </BaseSongCardGrid>
  </div>
</template>

<style scoped lang="scss">
.dis-rec {
  h4 {
    margin: 2.6667vw 0;
  }
}
</style>
