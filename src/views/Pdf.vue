<template>
	<v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <v-subheader>Select a PDF: </v-subheader>
        <v-select :items="pdfList" v-model="src" label="Select" single-line></v-select>
      </v-flex>
      <v-flex xs12 sm1 mt-1>
        {{page}} / {{numPages}}
      </v-flex>
      <v-flex xs12 sm2>
        <v-checkbox :label="`Show: ${show.toString()}`" v-model="show"></v-checkbox>
      </v-flex>
      <v-flex xs12 sm1 mt-5>
        <v-speed-dial v-model="fab" :top="top" :bottom="bottom" :right="right"
          :left="left"  :direction="direction" :open-on-hover="hover"
          :transition="transition">
        <v-btn slot="activator" color="teal darken-1"
          dark fab hover v-model="fab">
          <v-icon>control_point</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
          <v-btn fab dark small color="primary" @click="$refs.pdf.print()">
            <v-icon>print</v-icon>
          </v-btn>
          <v-btn fab dark small color="teal darken-4" @click="rotate -= 90">
            <v-icon>rotate_left</v-icon>
          </v-btn>
          <v-btn fab dark small color="teal darken-4" @click="rotate += 90">
            <v-icon>rotate_right</v-icon>
          </v-btn>
          <v-btn fab dark small color="teal darken-4" @click="page += 1">
            <v-icon>navigate_next</v-icon>
          </v-btn>
          <v-btn fab dark small color="teal darken-4" @click="page -= 1">
            <v-icon>navigate_before</v-icon>
          </v-btn>
        </v-speed-dial>
      </v-flex>
      <v-flex xs12>
        <v-jumbotron color="blue-grey darken-3" style="height: 100%;">
          <pdf style="display: inline-block; width: 99%" v-if="show" ref="pdf"
            :src="src" :page="page" :rotate="rotate" @password="password"
            @progress="loadedRatio = $event" @error="error" @num-pages="numPages = $event"></pdf>
        </v-jumbotron>
      </v-flex>
    </v-layout>
	</v-container>
</template>
<script>

import pdf from 'vue-pdf';
export default {
  components: {
    pdf,
  },
  data() {
    return {
      direction: 'left',
      show: true,
      pdfList: [
        '',
        'https://cdn.mozilla.net/pdfjs/tracemonkey.pdf',
        'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/freeculture.pdf',
        'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/annotation-link-text-popup.pdf',
        'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/calrgb.pdf',
        'https://cdn.rawgit.com/sayanee/angularjs-pdf/68066e85/example/pdf/relativity.protected.pdf',
      ],
      src: '',
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0,
    };
  },
  methods: {
    password(updatePassword, reason) {
      updatePassword(prompt('password is "test"'));
    },
    error(err) {
      console.log(err);
    },
  },
};
</script>
