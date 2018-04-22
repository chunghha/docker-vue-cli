<template>
  <div>
    <v-tabs
      v-model="active"
      color="teal darken-4"
      dark
      slider-color="orange"
    >
      <v-tab
        v-for="n in 3"
        :key="n"
        ripple
      >
        Item {{ n }}
      </v-tab>
      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-expansion-panel popout focusable>
          <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
            <div slot="header">Item</div>
            <v-card>
                <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-tab-item>
    </v-tabs>

    <div class="text-xs-center mt-3">
      <v-btn @click.native="next">next tab</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  active = '0';
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  next() {
    const active = parseInt(this.active);
    this.active = (active < 2 ? active + 1 : 0).toString();
  }
}
</script>
