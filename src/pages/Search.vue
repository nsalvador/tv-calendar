<template>
  <v-container grid-list-md>
    <v-layout>
      <v-snackbar v-model="snackbar" top :timeout="timeout">
        <span class="subheading">{{ message }}</span>
        <v-btn flat @click="snackbar=false">Close</v-btn>
      </v-snackbar>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-toolbar>
          <v-text-field
            placeholder="Search for a TV series"
            clearable
            prepend-inner-icon="search"
            @keyup.enter="search"
            v-model="show"
          ></v-text-field>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="hidden-md-and-up">
      <v-flex v-show="loaded">
        <app-spinner/>
      </v-flex>
      <v-flex v-for="(item, index) in series" :key="index" xs6>
        <app-image :series="item">
          <template slot="search-image">
            <v-img :src="getImage(item)" contain aspect-ratio="0.68" class="img"/>
          </template>
          <template slot="search-button">
            <v-btn small icon @click="subscribe(item, index)">
              <v-icon title="Subscribe" v-if="!isSubscribed(index)">add</v-icon>
              <v-icon title="Unsubscribe" v-else>remove</v-icon>
            </v-btn>
          </template>
        </app-image>
      </v-flex>
    </v-layout>
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
            <v-btn small icon @click="subscribe(item, index)">
              <v-icon title="Subscribe" v-if="!isSubscribed(index)">add</v-icon>
              <v-icon title="Unsubscribe" v-else>remove</v-icon>
            </v-btn>
          </template>
        </app-image>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import appImage from "../components/Image.vue";
import appSpinner from "../components/Spinner.vue";

export default {
  components: {
    appImage,
    appSpinner
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
            url: "/show/save",
            method: "post",
            data
          });
          let response = await this.$store.dispatch("getSubscriptions", {
            url: "/shows",
            method: "get"
          });
          await this.$store.commit("setSubscriptions", response.data.data);
        } else {
          this.$delete(this.selected, index);
          await this.$store.dispatch("unsubscribe", {
            url: `/show/${data.id.toString()}`,
            method: "delete"
          });
          let response = await this.$store.dispatch("getSubscriptions", {
            url: "/shows",
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

