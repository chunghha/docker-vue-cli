<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media>
          <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
        </v-card-media>
        <v-card-actions>
          <v-btn @click="playVideo">Play</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'lG0Ys-2d4MA'
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log('o/ we are watching!!!');
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
};
</script>

