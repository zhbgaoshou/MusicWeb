<script setup></script>

<template>
  <div class="header-right">
    <div class="search">
      <input type="text" placeholder="今天想听什么音乐0_0" />

      <div class="s-btn">
        <img src="@/assets/svg/header/8666693_search_icon.svg" alt="" />
      </div>
    </div>
    <img src="@/assets/svg/header/8666594_slack_icon.svg" alt="" />
  </div>
</template>

<style scoped lang="scss">
.header-right {
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 70%;
  .search {
    @include vertical-center;
    flex: 1;
    height: 100%;
    border: 1px solid #ededed;
    border-radius: 1.3333vw;

    .s-btn {
      @include box-center;
      cursor: pointer;
      height: 100%;
    }

    input {
      flex: 1;
      background-color: transparent;
      outline: 0;
      border: 0;
      padding-left: 2vw;
    }
  }

  img {
    width: 20px;
    height: 20px;
    margin: 0 1.3333vw;
  }
}
</style>
