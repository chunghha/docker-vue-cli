<template>
	<v-container fluid>
    <v-layout row wrap>
      <v-flex xs6>
        <v-subheader>Select a PDF: </v-subheader>
        <v-select :items="pdfList" v-model="src" label="Select" single-line></v-select>
      </v-flex>
      <v-flex xs6>
        <v-checkbox :label="`Show: ${show.toString()}`" v-model="show"></v-checkbox>
      </v-flex>
      <v-flex xs6>
        {{page}} / {{numPages}}
      </v-flex>
      <v-flex xs6>
        <v-btn color="teal darken-4" @click="page -= 1">
          <v-icon>navigate_before</v-icon>
        </v-btn>
        <v-btn color="teal darken-4" @click="page += 1">
          <v-icon>navigate_next</v-icon>
        </v-btn>
        <v-btn color="teal darken-4" @click="rotate += 90">
          <v-icon>rotate_right</v-icon>
        </v-btn>
        <v-btn color="teal darken-4" @click="rotate -= 90">
          <v-icon>rotate_left</v-icon>
        </v-btn>
        <v-btn color="primary" @click="$refs.pdf.print()">
          <v-icon>print</v-icon>
        </v-btn>
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
import pdf from "vue-pdf";
export default {
  components: {
    pdf: pdf
  },
  data() {
    return {
      show: true,
      pdfList: [
        "",
        "https://cdn.mozilla.net/pdfjs/tracemonkey.pdf",
        "https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/freeculture.pdf",
        "https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/annotation-link-text-popup.pdf",
        "https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/calrgb.pdf",
        "https://cdn.rawgit.com/sayanee/angularjs-pdf/68066e85/example/pdf/relativity.protected.pdf",
        "data:application/pdf;base64,JVBERi0xLjUKJbXtrvsKMyAwIG9iago8PCAvTGVuZ3RoIDQgMCBSCiAgIC9GaWx0ZXIgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQp4nE2NuwoCQQxF+/mK+wMbk5lkHl+wIFislmIhPhYEi10Lf9/MVgZCAufmZAkMppJ6+ZLUuFWsM3ZXxvzpFNaMYjEriqpCtbZSBOsDzw0zjqPHZYtTrEmz4eto7/0K54t7GfegOGCBbBdDH3+y2zsMsVERc9SoRkXORqKGJupS6/9OmMIUfgypJL4KZW5kc3RyZWFtCmVuZG9iago0IDAgb2JqCiAgIDEzOAplbmRvYmoKMiAwIG9iago8PAogICAvRXh0R1N0YXRlIDw8CiAgICAgIC9hMCA8PCAvQ0EgMC42MTE5ODcgL2NhIDAuNjExOTg3ID4+CiAgICAgIC9hMSA8PCAvQ0EgMSAvY2EgMSA+PgogICA+Pgo+PgplbmRvYmoKNSAwIG9iago8PCAvVHlwZSAvUGFnZQogICAvUGFyZW50IDEgMCBSCiAgIC9NZWRpYUJveCBbIDAgMCA1OTUuMjc1NTc0IDg0MS44ODk3NzEgXQogICAvQ29udGVudHMgMyAwIFIKICAgL0dyb3VwIDw8CiAgICAgIC9UeXBlIC9Hcm91cAogICAgICAvUyAvVHJhbnNwYXJlbmN5CiAgICAgIC9DUyAvRGV2aWNlUkdCCiAgID4+CiAgIC9SZXNvdXJjZXMgMiAwIFIKPj4KZW5kb2JqCjEgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzCiAgIC9LaWRzIFsgNSAwIFIgXQogICAvQ291bnQgMQo+PgplbmRvYmoKNiAwIG9iago8PCAvQ3JlYXRvciAoY2Fpcm8gMS4xMS4yIChodHRwOi8vY2Fpcm9ncmFwaGljcy5vcmcpKQogICAvUHJvZHVjZXIgKGNhaXJvIDEuMTEuMiAoaHR0cDovL2NhaXJvZ3JhcGhpY3Mub3JnKSkKPj4KZW5kb2JqCjcgMCBvYmoKPDwgL1R5cGUgL0NhdGFsb2cKICAgL1BhZ2VzIDEgMCBSCj4+CmVuZG9iagp4cmVmCjAgOAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDA1ODAgMDAwMDAgbiAKMDAwMDAwMDI1MiAwMDAwMCBuIAowMDAwMDAwMDE1IDAwMDAwIG4gCjAwMDAwMDAyMzAgMDAwMDAgbiAKMDAwMDAwMDM2NiAwMDAwMCBuIAowMDAwMDAwNjQ1IDAwMDAwIG4gCjAwMDAwMDA3NzIgMDAwMDAgbiAKdHJhaWxlcgo8PCAvU2l6ZSA4CiAgIC9Sb290IDcgMCBSCiAgIC9JbmZvIDYgMCBSCj4+CnN0YXJ0eHJlZgo4MjQKJSVFT0YK"
      ],
      src: "",
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0
    };
  },
  methods: {
    password: function(updatePassword, reason) {
      updatePassword(prompt('password is "test"'));
    },
    error: function(err) {
      console.log(err);
    }
  }
};
</script>