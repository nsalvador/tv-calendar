<template>
  <v-card flat tile>
    <v-responsive>
      <slot name="subscriptions-image"/>
    </v-responsive>
    <v-card-actions>
      <span class="ellipsis" :title="series.seriesName">{{ series.seriesName }}</span>
      <v-spacer></v-spacer>
      <app-dialog :series="series">
        <template slot="subscriptions-button">
          <slot name="subscriptions-button"></slot>
        </template>
        <template slot="search-button">
          <slot name="search-button"/>
        </template>
        <template slot="calendar-button">
          <slot name="calendar-button"></slot>
        </template>
      </app-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
import appDialog from "./Dialog.vue";

export default {
  props: ["series"],
  components: {
    "app-dialog": appDialog
  }
};
</script>