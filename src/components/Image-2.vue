<template>
  <v-card flat tile>
    <v-responsive>
      <div class="card">
        <slot name="search-image"/>
        <slot name="subscriptions-image"/>
        <slot name="search-overview"/>
    </v-responsive>
    <v-card-actions>
      <span class="ellipsis" :title="series.seriesName">{{ series.seriesName }}</span>
      <v-spacer></v-spacer>
      <v-dialog
        fullscreen
        hide-overlay
        v-model="dialog"
        transition="dialog-bottom-transition"
      >
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
            <h3 class="headline mb-0">{{ series.seriesName }}</h3>
          </v-card-title>
          <v-card-text>
            <div>{{ series.overview }}</div>
          </v-card-text>
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
    }
  }
};
</script>