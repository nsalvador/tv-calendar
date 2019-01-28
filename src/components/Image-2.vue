<template>
  <v-card flat tile>
    <v-responsive>
      <slot name="subscriptions-image"/>
    </v-responsive>
    <v-card-actions>
      <span class="ellipsis" :title="series.seriesName">{{ series.seriesName }}</span>
      <v-spacer></v-spacer>
      <v-dialog fullscreen hide-overlay v-model="dialog" transition="dialog-bottom-transition">
        <v-btn icon small slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-card>
          <v-toolbar>
            <v-btn icon @click="dialog=false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-title>
            <div class="headline mb-0">{{ series.seriesName }}</div>
          </v-card-title>
          <v-card-text>
            <h3>Overview:</h3>
            <p>{{ series.overview }}</p>
            <h3>Air Date:</h3>
            <p>{{ series.airsDayOfWeek }}</p>
            <h3>Status:</h3>
            <p>{{ series.status }}</p>
          </v-card-text>
          <v-card-actions>
            <slot name="search-button"></slot>
            <slot name="subscriptions-button"></slot>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
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