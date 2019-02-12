<template>
  <v-container grid-list-md class="pt-0">
    <v-layout>
      <v-flex>
        <v-snackbar v-model="snackbar" top :timeout="timeout">
          <span class="subheading">{{ message }}</span>
          <v-btn flat @click="snackbar=false">Close</v-btn>
        </v-snackbar>
      </v-flex>
    </v-layout>
    <v-layout class="hidden-md-and-up">
      <v-flex>
        <v-select :items="days" @change="search" v-model="row" label="Select a day"></v-select>
      </v-flex>
    </v-layout>
    <v-layout class="hidden-sm-and-down">
      <v-flex>
        <v-radio-group row v-model="row" @change="search">
          <v-radio v-for="(day, index) in days" :key="index" :label="day" :value="day"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
    <v-layout v-if="isListView">
      <v-flex v-show="loaded">
        <app-spinner/>
      </v-flex>
      <v-flex xs12>
        <v-list class="py-0">
          <template v-for="(series, index) in subscriptions">
            <v-divider :key="index" v-if="index!=0"></v-divider>
            <v-list-tile :key="index">
              <v-list-tile-avatar tile>
                <v-img :src="series.posterUrl"></v-img>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-text="series.seriesName"></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <app-dialog :series="series">
                  <template slot="calendar-button">
                    <v-btn flat icon>
                      <v-icon></v-icon>
                    </v-btn>
                  </template>
                </app-dialog>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="hidden-md-and-up" v-else>
      <v-flex v-show="loaded">
        <app-spinner/>
      </v-flex>
      <v-flex v-for="(series, index) in subscriptions" :key="index" xs6>
        <app-image-2 :series="series">
          <template slot="subscriptions-image">
            <v-img :src="series.posterUrl" contain aspect-ratio="0.68" class="img"></v-img>
          </template>
          <template slot="calendar-button">
            <v-btn flat icon>
              <v-icon></v-icon>
            </v-btn>
          </template>
        </app-image-2>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="hidden-sm-and-down">
      <v-flex v-show="loaded">
        <app-spinner/>
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
</template>

<script>
import appImage from "../components/Image.vue";
import appImage2 from "../components/Image-2.vue";
import appSpinner from "../components/Spinner.vue";
import appDialog from "../components/Dialog.vue";

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
    appImage,
    "app-image-2": appImage2,
    appSpinner,
    "app-dialog": appDialog
  },
  methods: {
    async search(day) {
      try {
        this.loaded = true;
        this.$store.commit("setSeries", []);
        const config = { url: `/show/${day}`, method: "get" };
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

