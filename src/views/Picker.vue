<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm3>
        <v-checkbox hide-details label="Landscape" v-model="landscape"></v-checkbox>
      </v-flex>
      <v-flex xs12 sm3>
        <v-checkbox hide-details label="Reactive" v-model="reactive"></v-checkbox>
      </v-flex>
    </v-layout>
    <v-date-picker v-model="pickerD" :landscape="landscape" :reactive="reactive"></v-date-picker>
    <div>
      <v-time-picker v-model="pickerT" :landscape="landscape"></v-time-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  pickerD = null;
  pickerT = null;
  landscape = true;
  reactive = false;
}
</script>
