<template>
  <v-container style="height: 100%">
    <v-layout column fill-height>
      <v-snackbar v-model="snackbar" top :timeout="timeout">
        <span class="subheading">{{ message }}</span>
        <v-btn flat @click="snackbar=false">Close</v-btn>
      </v-snackbar>
      <v-toolbar>
        <v-text-field
          placeholder="Search for a TV series"
          clearable
          prepend-inner-icon="search"
          @keyup.enter="search"
          v-model="show"
        ></v-text-field>
      </v-toolbar>
      <app-spinner v-if="loaded"/>
      <v-container fluid fill-height grid-list-md v-else class="px-0">
        <v-layout row wrap>
          <v-flex v-for="(item, index) in series" :key="index" xs6>
            <app-image-mobile :series="item">
              <template slot="search-image">
                <v-img :src="getImage(item)" aspect-ratio="0.68" contain class="img"/>
              </template>
              <template slot="search-button">
                <v-btn left flat icon @click="subscribe(item, index)">
                  <v-icon v-if="!isSubscribed(index)">add</v-icon>
                  <v-icon v-else>remove</v-icon>
                </v-btn>
              </template>
              <template slot="search-info">
                <app-info :series="item" :display="false"></app-info>
              </template>
            </app-image-mobile>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
  <!--
  <v-layout row wrap class="hidden-sm-and-down">
      <v-flex v-show="loaded">
        <app-spinner/>
      </v-flex>
      <v-flex v-for="(item, index) in series" :key="index" xs3>
        <app-image :series="item">
          <template slot="search-image">
            <v-img :src="getImage(item)" contain aspect-ratio="0.68" class="img"/>
          </template>
          <template slot="search-button">
            <v-btn flat left small icon @click="subscribe(item, index)">
              <v-icon title="Subscribe" v-if="!isSubscribed(index)" left>add</v-icon>
              <v-icon title="Unsubscribe" v-else left>remove</v-icon>
            </v-btn>
          </template>
        </app-image>
      </v-flex>
    </v-layout>
  -->
</template>

<script>
import appImage from "../components/Image.vue";
import appImageMobile from "../components/Image-2.vue";
import appSpinner from "../components/Spinner.vue";
import appInfo from "../components/Info.vue";

export default {
  components: {
    appImage,
    appSpinner,
    "app-image-mobile": appImageMobile,
    "app-info": appInfo
  },
  data() {
    return {
      show: "",
      selected: [],
      loaded: false,
      snackbar: false,
      timeout: 2500,
      message: "",
      baseUrl: "https://www.thetvdb.com/banners/posters/",
      noImage: "https://via.placeholder.com/680x1000.png?text=No+Image"
    };
  },
  computed: {
    series() {
      return this.$store.getters.getSeries;
    },
    isListView() {
      return this.$store.getters.getIsListView;
    }
  },
  mounted() {
    this.$store.commit("setSeries", []);
  },
  methods: {
    async subscribe(data, index) {
      try {
        if (!this.selected.includes(index)) {
          this.$set(this.selected, index, index);
          await this.$store.dispatch("subscribe", {
            url: "/subscriptions",
            method: "post",
            data
          });
          let response = await this.$store.dispatch("getSubscriptions", {
            url: "/subscriptions/all",
            method: "get"
          });
          await this.$store.commit("setSubscriptions", response.data.data);
        } else {
          this.$delete(this.selected, index);
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
        }
      } catch (error) {
        this.message = "Something went wrong!";
        this.snackbar = true;
      }
    },
    isSubscribed(index) {
      return this.selected.includes(index);
    },
    getImage(item) {
      return item.posterKey ? `${this.baseUrl}${item.posterKey}` : this.noImage;
    },
    async search() {
      try {
        if (this.show !== "") {
          this.loaded = true;
          this.selected = [];
          this.$store.commit("setSeries", []);
          const config = {
            url: "/show/search",
            method: "post",
            data: { show: this.show }
          };
          this.show = "";
          let response = await this.$store.dispatch("search", config);
          this.loaded = false;
          this.$store.commit("setSeries", response.data.data);
          let mappedSeries = this.$store.getters.getSeries.map(value =>
            value.id.toString()
          );
          let subscriptions = this.$store.getters.getSubscriptions;
          subscriptions.forEach(value => {
            if (mappedSeries.indexOf(value._id) !== -1) {
              let index = mappedSeries.indexOf(value._id);
              this.$set(this.selected, index, index);
            }
          });
        }
      } catch (error) {
        this.loaded = false;
        this.message = "Not Found";
        this.snackbar = true;
      }
    }
  }
};
</script>

