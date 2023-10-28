<script setup>
import BaseMVCard from "@/base/BaseMVCard.vue";
</script>

<template>
  <div class="dis-mv">
    <h4>发现MV</h4>

    <BaseMVCard :dataList="2"></BaseMVCard>
  </div>
</template>

<style scoped lang="scss">
.dis-mv {
  h4 {
    margin: 2.6667vw 0;
  }
}
</style>
