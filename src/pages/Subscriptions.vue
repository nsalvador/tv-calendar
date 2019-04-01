<template>
  <v-container grid-list-md>
    <v-layout row v-if="isListView">
      <v-flex xs12>
        <v-list class="py-0">
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
                  <template slot="subscriptions-button">
                    <v-btn left flat icon @click="remove(series)">
                      <v-icon>remove</v-icon>
                    </v-btn>
                  </template>
                  <template slot="subscriptions-info">
                    <app-info :series="series" :display="true"></app-info>
                  </template>
                </app-dialog>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
    <template v-else>
      <v-layout row wrap class="hidden-md-and-up">
        <v-flex v-for="(series, index) in subscriptions" :key="index" xs6>
          <app-image-mobile :series="series">
            <template slot="subscriptions-image">
              <v-img :src="series.posterUrl" aspect-ratio="0.68" contain class="img"/>
            </template>
            <template slot="subscriptions-button">
              <v-btn left flat icon @click="remove(series)">
                <v-icon>remove</v-icon>
              </v-btn>
            </template>
            <template slot="subscriptions-info">
              <app-info :series="series" :display="true"></app-info>
            </template>
          </app-image-mobile>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="hidden-sm-and-down">
        <v-flex v-for="(series, index) in subscriptions" :key="index" xs3>
          <app-image-mobile :series="series">
            <template slot="subscriptions-image">
              <v-img :src="series.posterUrl" aspect-ratio="0.68" contain class="img"/>
            </template>
            <template slot="subscriptions-button">
              <v-btn left flat icon @click="remove(series)">
                <v-icon>remove</v-icon>
              </v-btn>
            </template>
            <template slot="subscriptions-info">
              <app-info :series="series" :display="true"></app-info>
            </template>
          </app-image-mobile>
        </v-flex>
      </v-layout>
    </template>
  </v-container>
</template>

<script>
import appImage from "../components/Image.vue";
import appImageMobile from "../components/Image-2.vue";
import appDialog from "../components/Dialog.vue";
import appInfo from "../components/Info.vue";

export default {
  components: {
    "app-image": appImage,
    "app-image-mobile": appImageMobile,
    "app-dialog": appDialog,
    "app-info": appInfo
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
        await this.$store.dispatch("unsubscribe", {
          url: "/subscriptions",
          method: "delete",
          data
        });
        let response = await this.$store.dispatch("getSubscriptions", {
          url: "/subscriptions/all",
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


