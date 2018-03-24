<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media>
          <youtube :video-id="videoId" :player-vars="playerVars"
            ref="youtube" @playing="playing"></youtube>
        </v-card-media>
        <v-card-actions>
          <v-btn :disabled="isPlaying" @click="playVideo"
            color="teal darken-4" block>Play</v-btn>
          <v-btn :disabled="!isPlaying" @click="stopVideo"
            color="deep-orange darken-4" block>Stop</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'lG0Ys-2d4MA',
      playerVars: {
        showInfo: 0
      },
      isPlaying: false
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
      this.isPlaying = true;
    },
    playing() {
      console.log('o/ we are watching!!!');
      this.isPlaying = true;
    },
    stopVideo() {
      this.player.stopVideo().then(() => {
        console.log('It is stopped!');
        this.isPlaying = false;
      });
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
};
</script>

