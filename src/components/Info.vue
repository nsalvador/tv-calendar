<template>
  <div>
    <h4>Name:</h4>
    <p class="cpation">{{ series.seriesName }}</p>
    <h4>Overview:</h4>
    <p class="caption">{{ series.overview }}</p>
    <h4>Status:</h4>
    <p class="caption">{{ series.status }}</p>
    <template v-if="display">
      <h4>Air Date:</h4>
      <p class="caption">{{ series.airsDayOfWeek }}</p>
      <h4>Aired Seasons:</h4>
      <p class="caption">{{ series.airedSeasons.length }}</p>
      <h4>Aired Episodes:</h4>
      <p class="caption">{{ series.airedEpisodes }}</p>
    </template>
  </div>
</template>

<script>
export default {
  props: ["series", "display"]
};
</script>

