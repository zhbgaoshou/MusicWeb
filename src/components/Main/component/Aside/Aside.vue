<script setup>
import { menuRoute as menuRouteList } from "@/router";
import { useRoute } from "vue-router";

console.log(menuRouteList);
</script>

<template>
  <div class="aside">
    <div class="aside-hd">
      <img src="@/assets/images/default.jpg" alt="" />
    </div>
    <div class="menu">
      <RouterLink
        v-for="menuRoute in menuRouteList"
        :key="menuRoute.path"
        :to="menuRoute.path"
      >
        <div
          :class="{ active: useRoute().path === menuRoute.path }"
          class="menu-item"
        >
          <i :class="['iconfont', menuRoute.meta.icon, 'icon']"></i>
          <span class="title">{{ menuRoute.meta.title }}</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.aside {
  background-color: $aside-bg-color;
  height: 90%;
  min-width: 60px;
  margin-left: 1.3333vw;
  border-radius: 10px;
  flex-basis: max-content;

  .aside-hd {
    height: 20%;
    min-height: 70px;
    @include box-center;

    img {
      width: 8vw;
      height: 8vw;
      min-width: 50px;
      min-height: 50px;
      max-width: 60px;
      max-height: 60px;
      border: 5px solid #ededed;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .menu {
    height: 80%;
    overflow: auto;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.3333vw;
      font-size: $default-font-size;
      letter-spacing: 0.1em;
      color: #000;
      overflow: hidden;

      .icon {
        margin-right: 5px;
        font-weight: 700;
        font-size: $default-font-size;
      }

      span {
        font-family: "阿里妈妈数黑体 Bold";
      }

      &:hover {
        background-color: $hover;
        border-radius: 10px;
      }
    }
  }
}

.active {
  color: rgb(250, 68, 68);
}

@media screen and (max-width: 765px) {
  .menu-item {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .icon {
    font-size: 3.2vw !important;
  }
}

@media screen and (max-width: 375px) {
  .title {
    display: none;
  }

  .icon {
    font-size: 6.6667vw !important;
  }
}
</style>
