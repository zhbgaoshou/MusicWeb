<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["dataList", "fy"]);

function goMvDetail(mv_id) {
  router.push({
    name: "mvdetail",
    query: {
      mv_id,
    },
  });
}
</script>

<template>
  <div class="grid-box">
    <div v-for="i in props.dataList" @click="goMvDetail(1)">
      <div class="grid-item">
        <img src="@/assets/images/swiper/one/v15.jpg" alt="" />
      </div>
      <p>名字</p>
      <p>作者</p>
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
  grid-auto-rows: 300px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.333333vw;

  .grid-item {
    height: 80%;
    @include card-style;
    img {
      @include img-style();
    }
  }

  p {
    font-size: 18px;
    margin: 5px;
    color: $t-color;
  }
}
.fy {
  display: flex;
  justify-content: end;
  height: max-content;
  margin-top: 10px;
}
</style>
