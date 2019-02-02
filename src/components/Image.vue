<template>
  <v-card flat tile>
    <v-responsive>
      <div class="card">
        <slot name="search-image"/>
        <slot name="subscriptions-image"/>
        <div class="overview">
          <h3>{{ series.seriesName }}</h3>
          <p>{{ series.overview }}</p>
          <h4>Air Date:</h4>
          <p>{{ series.airsDayOfWeek }}</p>
          <h4>Status:</h4>
          <p>{{ series.status }}</p>
        </div>
      </div>
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

<style lang="scss" scoped>
.card {
  vertical-align: top;
  overflow: hidden;
  position: relative;

  &:hover {
    .overview {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .img {
      transform: scale(0.9);
    }
  }

  .img {
    width: 100%;
    height: auto;
    transform: scale(1);
    transition: transform 250ms ease-in-out;
  }
  .overview {
    color: black;
    position: absolute;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    opacity: 0;
    transform: translate3d(0, 10%, 0);
    transition: opacity 250ms ease-in-out 150ms,
      transform 250ms ease-in-out 150ms;
  }
}
</style>


