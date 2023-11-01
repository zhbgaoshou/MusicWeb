<script setup></script>

<template>
  <div class="fy">
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
.fy {
  display: flex;
  justify-content: end;
  height: max-content;
  margin-top: 10px;
}
</style>
