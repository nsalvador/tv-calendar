<template>
  <v-container style="height: 100%">
    <v-layout column fill-height>
      <v-select :items="days" @change="search" v-model="row" label="Select a day"></v-select>
      <app-spinner v-if="loaded"/>
      <v-container v-else-if="isListView" fluid class="px-0">
        <v-list class="py-0" v-if="isListView">
          <template v-for="(series, index) in subscriptions">
            <v-divider :key="index" v-if="index!=0"></v-divider>
            <v-list-tile :key="index">
              <v-list-tile-avatar>
                <v-img :src="series.posterUrl"></v-img>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-text="series.seriesName"></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <app-dialog :series="series">
                  <template slot="calendar-button">
                    <v-btn flat icon left>
                      <v-icon></v-icon>
                    </v-btn>
                  </template>
                  <template slot="calendar-info">
                    <app-info :series="series" :display="true"></app-info>
                  </template>
                </app-dialog>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-container>
      <v-container v-else fluid grid-list-md fill-height class="px-0">
        <v-layout row wrap class="hidden-md-and-up">
          <v-flex v-for="(series, index) in subscriptions" :key="index" xs6>
            <app-image-mobile :series="series">
              <template slot="calendar-image">
                <v-img :src="series.posterUrl" contain aspect-ratio="0.68" class="img"></v-img>
              </template>
              <template slot="calendar-button">
                <v-btn flat icon left>
                  <v-icon></v-icon>
                </v-btn>
              </template>
              <template slot="calendar-info">
                <app-info :series="series" :display="true"></app-info>
              </template>
            </app-image-mobile>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="hidden-sm-and-down">
          <v-flex v-for="(series, index) in subscriptions" :key="index" xs3>
            <app-image-mobile :series="series">
              <template slot="calendar-image">
                <v-img :src="series.posterUrl" contain aspect-ratio="0.68" class="img"></v-img>
              </template>
              <template slot="calendar-button">
                <v-btn flat icon left>
                  <v-icon></v-icon>
                </v-btn>
              </template>
              <template slot="calendar-info">
                <app-info :series="series" :display="true"></app-info>
              </template>
            </app-image-mobile>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import appImage from "../components/Image.vue";
import appImageMobile from "../components/Image-2.vue";
import appSpinner from "../components/Spinner.vue";
import appDialog from "../components/Dialog.vue";
import appInfo from "../components/Info.vue";

export default {
  computed: {
    subscriptions() {
      return this.$store.getters.getSeries;
    },
    isListView() {
      return this.$store.getters.getIsListView;
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
    "app-image": appImage,
    "app-image-mobile": appImageMobile,
    "app-spinner": appSpinner,
    "app-dialog": appDialog,
    "app-info": appInfo
  },
  methods: {
    async search(day) {
      try {
        this.loaded = true;
        this.$store.commit("setSeries", []);
        const config = {
          url: `/subscriptions/${day}`,
          method: "get"
        };
        let response = await this.$store.dispatch("getSubscriptions", config);
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

