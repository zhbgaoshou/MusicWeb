<script setup>
import Footer from "@/components/Footer/Footer.vue";
import Main from "@/components/Main/Main.vue";
import Header from "@/components/Header/Header.vue";
</script>

<template>
  <div class="layout" id="layout">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
