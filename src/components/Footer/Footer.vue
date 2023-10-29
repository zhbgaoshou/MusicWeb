<script setup>
import FooterLeft from "./component/FooterLeft.vue";
import FooterMid from "./component/FooterMid.vue";
import FooterRight from "./component/FooterRight.vue";
</script>

<template>
  <div class="footer">
    <FooterLeft></FooterLeft>
    <FooterMid></FooterMid>
    <FooterRight></FooterRight>
  </div>
</template>

<style scoped lang="scss">
.footer {
  flex-basis: $f-height;
  display: flex;
  justify-content: space-between;
  background-color: $ft-bg-color;
  min-height: 80px;
  max-height: 80px;
}
</style>
