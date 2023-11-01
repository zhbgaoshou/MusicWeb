<script setup>
const props = defineProps(["image", "name", "artist"]);
</script>

<template>
  <div>
    <div class="grid-item">
      <img :src="props.image" alt="" />
    </div>
    <p>{{ props.name }}</p>
    <p>{{ props.artist }}</p>
  </div>
</template>

<style scoped lang="scss">
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

  @include ell-line();
}
</style>
