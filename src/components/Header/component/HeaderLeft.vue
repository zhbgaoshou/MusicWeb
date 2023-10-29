<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="header-left">
    <div class="img-items">
      <img
        src="@/assets/svg/header/8666691_home_icon.svg"
        alt="home"
        title="回到首页"
      />
      <img src="@/assets/svg/header/8666541_maximize_icon.svg" alt="全屏" />
      <img
        src="@/assets/svg/header/8666813_minus_circle_remove_icon.svg"
        alt="缩小"
      />
      <img
        @click="router.back()"
        src="@/assets/svg/header/8666600_arrow_left_icon.svg"
        alt="后退"
      />
      <img
        @click="router.forward()"
        src="@/assets/svg/header/8666606_arrow_right_icon.svg"
        alt="前进"
      />
    </div>

    <div class="bot-item" style="display: none">
      <img
        @click="router.back()"
        src="@/assets/svg/header/8666655_arrow_left_circle_icon.svg"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-left {
  img {
    margin: 0 1.3333vw;
    padding: 0.4vw;
    border-radius: 3px;
    transition: all 0.3s;

    &:hover {
      background-color: $hover;
    }
  }
}

@media screen and (max-width: 765px) {
  .img-items {
    display: none;
  }
  .bot-item {
    display: block !important;
  }
}
</style>
