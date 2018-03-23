<template>
  <v-carousel>
    <v-carousel-item v-for="item in 6" :key="item">
      <img :src="r + String(item)">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      r: 'https://lorempixel.com/800/400?r='
    };
  }
};
</script>
