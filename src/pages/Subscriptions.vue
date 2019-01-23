<template>
  <v-container grid-list-md>
    <v-layout>
      <v-snackbar v-model="snackbar" top :timeout="timeout">
        <span class="subheading">{{ message }}</span>
        <v-btn flat @click="snackbar=false">Close</v-btn>
      </v-snackbar>
    </v-layout>
    <v-layout row wrap class="hidden-md-and-up">
      <v-flex v-for="(series, index) in subscriptions" :key="index" xs6>
        <app-image-2 :series="series">
          <template slot="subscriptions-image">
            <v-img :src="series.posterUrl" aspect-ratio="0.68" contain class="img"/>
          </template>
          <template slot="subscriptions-button">
            <v-dialog
              fullscreen
              hide-overlay
              v-model="dialog"
              transition="dialog-bottom-transition"
            >
              <v-btn icon small left slot="activator">
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
          </template>
        </app-image-2>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="hidden-sm-and-down">
      <v-flex v-for="(series, index) in subscriptions" :key="index" xs3>
        <app-image :series="series">
          <template slot="subscriptions-image">
            <v-img :src="series.posterUrl" contain aspect-ratio="0.68" class="img"/>
          </template>
          <template slot="subscriptions-button">
            <v-btn small icon @click="remove(series)">
              <v-icon title="Remove">remove</v-icon>
            </v-btn>
          </template>
        </app-image>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import appImage from "../components/Image.vue";
import appImage2 from "../components/Image-2.vue";

export default {
  components: {
    appImage,
    "app-image-2": appImage2
  },
  data() {
    return {
      snackbar: false,
      message: "",
      timeout: 2500,
      page: "Subscriptions",
      dialog: false
    };
  },
  methods: {
    async remove(data) {
      try {
        await this.$store.dispatch("unsubscribe", {
          url: "/show",
          method: "delete",
          data
        });
        let response = await this.$store.dispatch("getSubscriptions", {
          url: "/shows",
          method: "get"
        });
        this.$store.commit("setSubscriptions", response.data.data);
      } catch (error) {
        this.message = "Something happened!";
        this.snackbar = true;
      }
    }
  },
  computed: {
    subscriptions() {
      return this.$store.getters.getSubscriptions;
    }
  }
};
</script>


