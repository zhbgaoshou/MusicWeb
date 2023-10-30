<script setup>
import { useRouter } from "vue-router";
const props = defineProps(["dataList", "fy"]);

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
  <div class="grid-box">
    <div style="cursor: pointer" v-for="data in dataList" @click="goDetail(1)">
      <div class="grid-item">
        <img src="@/assets/images/swiper/one/v12.jpg" alt="" />
      </div>
      <p class="txt">
        这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述
      </p>
    </div>
  </div>
  <div class="fy" v-if="props.fy">
    <el-pagination
      small
      background
      pager-count="5"
      layout="prev, pager, next"
      :total="1000"
    />
  </div>
</template>

<style scoped lang="scss">
.grid-box {
  display: grid;
  grid-auto-rows: 230px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.3333vw;

  .txt {
    margin: 10px;
    font-size: 12px;
    color: $t-color;
    line-height: 20px;
    @include ell-mline();
  }

  .grid-item {
    height: 80%;
    @include card-style;

    img {
      @include img-style;
    }
  }
}

.fy {
  display: flex;
  justify-content: end;
  height: max-content;
  margin-top: 10px;
}
</style>
