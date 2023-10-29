<script setup>
import BaseMusicCard from "@/base/BaseMusicCard.vue";
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
