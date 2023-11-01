<script setup>
import BaseMusicCardGrid from "@/base/BaseMusicCardGrid.vue";
import { zeroFill, millisecondsToMinutes } from "@/utils/index";

import { useDiscoverStore } from "@/store";
const discoverStore = useDiscoverStore();
</script>

<template>
  <div class="dis-music">
    <h4 style="display: flex; align-items: center">
      发现音乐
      <el-tooltip content="全部播放" placement="right" effect="light">
        <img
          style="
            width: 20px;
            object-fit: cover;
            margin-left: 10px;
            cursor: pointer;
          "
          src="@/assets/svg/8666605_music_icon.svg"
          alt=""
        />
      </el-tooltip>
    </h4>
    <BaseMusicCardGrid>
      <BaseMusicCard
        v-for="(data, index) in discoverStore.discoverRecNewSongList"
        :key="data.id"
        :IDX="zeroFill(index + 1)"
        :image="data.picUrl"
        :songName="data.name"
        :singer="data.song.artists[0].name"
        :playTime="millisecondsToMinutes(data.song.hMusic.playTime)"
      ></BaseMusicCard>
    </BaseMusicCardGrid>
  </div>
</template>

<style scoped lang="scss">
.dis-music {
  h4 {
    margin: 2.6667vw 0;
  }
}
</style>
