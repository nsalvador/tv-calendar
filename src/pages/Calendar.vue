<template>
  <v-container>
    <v-snackbar v-model="snackbar" top :timeout="timeout">
      <span class="subheading">{{ message }}</span>
      <v-btn flat @click="snackbar=false">Close</v-btn>
    </v-snackbar>

    <v-layout column align-center>
      <v-container class="px-0">
        <v-select
          :items="days"
          @change="search"
          v-model="row"
          class="hidden-md-and-up"
          label="Select a day"
        ></v-select>
      </v-container>

      <v-radio-group row v-model="row" @change="search" class="hidden-sm-and-down">
        <v-radio v-for="(day, index) in days" :key="index" :label="day" :value="day"></v-radio>
      </v-radio-group>

      <v-container grid-list-sm class="hidden-md-and-up">
        <v-layout row wrap>
          <v-flex v-show="loaded">
            <app-spinner v-show="loaded"></app-spinner>
          </v-flex>
          <v-flex v-for="(series, index) in subscriptions" :key="index" xs6>
            <app-image :series="series">
              <template slot="subscriptions-image">
                <v-img :src="series.posterUrl" contain aspect-ratio="1" class="img"></v-img>
              </template>
            </app-image>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-md class="hidden-sm-and-down" fill-height>
        <v-layout row wrap>
          <v-flex v-show="loaded">
            <app-spinner v-show="loaded"></app-spinner>
          </v-flex>
          <v-flex v-for="(value, key) in subscriptions" :key="key" xs3>
            <app-image :series="value">
              <template slot="subscriptions-image">
                <v-img :src="value.posterUrl" contain aspect-ratio="0.68" class="img"/>
              </template>
            </app-image>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import appImage from "../components/Image.vue";
import appSpinner from "../components/Spinner.vue";

export default {
  computed: {
    subscriptions() {
      return this.$store.getters.getSeries;
    }
  },
  data() {
    return {
      loaded: false,
      row: "",
      snackbar: false,
      timeout: 2500,
      message: "",
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
  },
  components: {
    appImage,
    appSpinner
  },
  methods: {
    async search(day) {
      try {
        this.loaded = true;
        this.$store.commit("setSeries", []);
        const config = { url: `/shows/${day}`, method: "get" };
        let response = await this.$store.dispatch(
          "getSubscriptionsByDay",
          config
        );
        this.loaded = false;
        this.$store.commit("setSeries", response.data.data);
      } catch (error) {
        this.message = "Something went wrong!";
        this.snackbar = true;
      }
    }
  }
};
</script>

