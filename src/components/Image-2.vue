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
      <slot name="search-button"></slot>
      <slot name="subscriptions-button"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["series"]
};
</script>