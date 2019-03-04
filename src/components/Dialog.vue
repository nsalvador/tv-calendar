<template>
  <v-dialog fullscreen hide-overlay v-model="dialog" transition="dialog-bottom-transition">
    <v-btn icon small slot="activator">
      <v-icon>info</v-icon>
    </v-btn>
    <v-card>
      <v-toolbar>
        <v-btn icon @click="dialog=false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-container class="overflow-x-hidden">
          <div class="text-xs-center title ellipsis">{{ series.seriesName }}</div>
        </v-container>
        <v-spacer></v-spacer>
        <v-toolbar-items @click="dialog=false">
          <slot name="search-button"></slot>
          <slot name="subscriptions-button"></slot>
          <slot name="calendar-button"></slot>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <slot name="search-info"></slot>
        <slot name="subscriptions-info"></slot>
        <slot name="calendar-info"></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["series"],
  data() {
    return {
      dialog: false
    };
  }
};
</script>
  