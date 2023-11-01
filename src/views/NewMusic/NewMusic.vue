<script setup>
import { reactive } from "vue";
import BaseMusicCardGrid from "@/base/BaseMusicCardGrid.vue";
import BaseNav from "@/base/BaseNav.vue";
import { useNewSongStore } from "@/store/index";
import { zeroFill, millisecondsToMinutes } from "@/utils/index";

const newSongStore = useNewSongStore();

newSongStore.getNewSongList();

const navList = reactive(["全部", "欧美", "华语", "流行", "说唱", "摇滚"]);
</script>

<template>
  <div class="newmusic">
    <BaseNav class="rec-nav" :navList="navList"></BaseNav>

    <BaseMusicCardGrid :dataList="100">
      <BaseMusicCard
        v-for="(data, index) in newSongStore.newSongList"
        :key="data.id"
        :IDX="zeroFill(index + 1)"
        :image="data.album.blurPicUrl"
        :songName="data.name"
        :singer="data.artists[0].name"
        :playTime="millisecondsToMinutes(data.hMusic.playTime)"
      ></BaseMusicCard>
    </BaseMusicCardGrid>
  </div>
</template>

<style scoped lang="scss">
.newmusic {
  padding-right: 5px;
  height: 100%;
}
</style>
