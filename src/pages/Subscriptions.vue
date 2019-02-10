<template>
  <v-container grid-list-md>
    <v-layout>
      <v-snackbar v-model="snackbar" top :timeout="timeout">
        <span class="subheading">{{ message }}</span>
        <v-btn flat @click="snackbar=false">Close</v-btn>
      </v-snackbar>
    </v-layout>
    <v-layout row v-if="isListView">
      <v-flex xs12>
        <v-list class="py-0">
          <template v-for="(series, index) in subscriptions">
            <v-divider :key="index" v-if="index!=0"></v-divider>
            <v-list-tile :key="index">
              <v-list-tile-content>
                <v-list-tile-title v-text="series.seriesName"></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <app-dialog :series="series">
                  <template slot="subscriptions-button">
                    <v-btn flat @click="remove(series)" icon>
                      <v-icon>remove</v-icon>
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
      <v-flex v-for="(series, index) in subscriptions" :key="index" xs6>
        <app-image-2 :series="series">
          <template slot="subscriptions-image">
            <v-img :src="series.posterUrl" aspect-ratio="0.68" contain class="img"/>
          </template>
          <template slot="subscriptions-button">
            <v-btn flat @click="remove(series)" icon>
              <v-icon>remove</v-icon>
            </v-btn>
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
import appDialog from "../components/Dialog.vue";

export default {
  components: {
    appImage,
    "app-image-2": appImage2,
    "app-dialog": appDialog
  },
  data() {
    return {
      snackbar: false,
      message: "",
      timeout: 2500,
      page: "Subscriptions"
    };
  },
  methods: {
    async remove(data) {
      try {
        data.id = Number(data._id);
        delete data._id;
        await this.$store.dispatch("unsubscribe", {
          url: "/show",
          method: "delete",
          data
        });
        let response = await this.$store.dispatch("getSubscriptions", {
          url: "/show",
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
    isListView() {
      return this.$store.getters.getIsListView;
    },
    subscriptions() {
      return this.$store.getters.getSubscriptions;
    }
  }
};
</script>


