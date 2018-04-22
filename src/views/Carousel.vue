<template>
  <v-carousel class="elevation-8">
    <v-carousel-item v-for="item in 6" :key="item">
      <img :src="r + String(item)">
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public r = 'https://lorempixel.com/1300/960?r=';
}
</script>
