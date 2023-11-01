<script setup>
import { useDiscoverStore } from "@/store";
import BaseMVCardGrid from "@/base/BaseMVCardGrid.vue";
const discoverStore = useDiscoverStore();
</script>

<template>
  <div class="dis-mv">
    <h4>发现MV</h4>
    <BaseMVCardGrid>
      <BaseMVCard
        v-for="data in discoverStore.discoverRecMVList"
        :key="data.id"
        :image="data.picUrl"
        :name="data.name"
        :artist="data.artistName"
      ></BaseMVCard>
    </BaseMVCardGrid>
  </div>
</template>

<style scoped lang="scss">
.dis-mv {
  h4 {
    margin: 2.6667vw 0;
  }
}
</style>
