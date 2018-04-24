<template>
  <line-chart :data="data" :colors="colors" :download="true"></line-chart>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public data = [
    {
      name: 'Kiwi',
      data: {
        '2018-02-01': 3,
        '2018-02-02': 8,
        '2018-02-03': 2,
        '2018-02-04': 5,
        '2018-02-05': 9
      }
    },
    {
      name: 'Orange',
      data: {
        '2018-02-01': 5,
        '2018-02-02': 10,
        '2018-02-03': 12,
        '2018-02-04': 4,
        '2018-02-05': 6
      }
    }
  ];
  public colors = ['#33691E', '#E65100'];
}
</script>
