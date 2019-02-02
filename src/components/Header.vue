<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-container v-if="showTitle" class="hidden-md-and-up">
      <div class="text-xs-center title">
        <v-badge>
          <span slot="badge" v-if="showBadge">{{ badgeNumber }}</span>
          {{ title }}
        </v-badge>
      </div>
    </v-container>
    <v-spacer></v-spacer>
    <template v-if="!onStartPage">
      <v-menu class="hidden-md-and-up" full-width>
        <v-btn icon slot="activator" left>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="search">
            <v-list-tile-title>Search</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="subscriptions">
            <v-list-tile-title>Subscriptions</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="calendar">
            <v-list-tile-title>Calendar</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="finish">
            <v-list-tile-title>Finish</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </template>
    <v-toolbar-items class="hidden-sm-and-down">
      <template v-if="started">
        <v-btn flat @click="search">
          <v-badge>
            <span v-if="showSearchCount" slot="badge">{{ seriesCount }}</span>
            Search
          </v-badge>
        </v-btn>
        <v-btn flat @click="subscriptions">
          <v-badge>
            <span v-if="showSubscriptionsCount" slot="badge">{{ subscriptionsCount }}</span>
            Subscriptions
          </v-badge>
        </v-btn>
        <v-btn flat @click="calendar">
          <v-badge>
            <span slot="badge" v-if="showCalendarCount">{{ seriesCount }}</span>
            Calendar
          </v-badge>
        </v-btn>
        <v-btn flat @click="finish">Finish</v-btn>
      </template>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import router from "../router";

export default {
  computed: {
    started() {
      const start = sessionStorage.getItem("start");
      if (start) {
        this.$store.commit("setStart", true);
      } else {
        sessionStorage.removeItem("start");
        this.$store.commit("setStart", false);
      }
      return this.$store.getters.getStart;
    },
    onStartPage() {
      return this.$route.name == "home";
    },
    showTitle() {
      return this.title !== "Home";
    },
    badgeNumber() {
      switch (this.$route.name) {
        case "subscriptions":
          return this.subscriptionsCount;
        default:
          return this.seriesCount;
      }
    },
    showBadge() {
      switch (this.$route.name) {
        case "search":
          return this.showSearchCount;
        case "calendar":
          return this.showCalendarCount;
        case "subscriptions":
          return this.showSubscriptionsCount;
      }
    },
    title() {
      const page = this.$route.name;
      return page.charAt(0).toUpperCase() + page.slice(1);
    },
    showSearchCount() {
      return this.seriesCount !== 0 && this.$route.name == "search";
    },
    showCalendarCount() {
      return this.seriesCount !== 0 && this.$route.name == "calendar";
    },
    showSubscriptionsCount() {
      return this.$store.getters.getSubscriptions.length !== 0;
    },
    seriesCount() {
      return this.$store.getters.getSeries.length;
    },
    subscriptionsCount() {
      return this.$store.getters.getSubscriptions.length;
    }
  },
  methods: {
    finish() {
      router.push({ name: "home" });
      this.$store.commit("setStart", false);
      sessionStorage.removeItem("start");
    },
    search() {
      if (this.$route.name !== "search") {
        router.push({ name: "search" });
      } else {
        this.$store.commit("setSeries", []);
      }
    },
    subscriptions() {
      this.$store.commit("setSeries", []);
      router.push({ name: "subscriptions" });
    },
    calendar() {
      this.$store.commit("setSeries", []);
      router.push({ name: "calendar" });
    }
  },
  async mounted() {
    try {
      const config = { url: "/shows", method: "get" };
      let response = await this.$store.dispatch("getSubscriptions", config);
      this.$store.commit("setSubscriptions", response.data.data);
    } catch (error) {
      console.log("Something went wrong!");
    }
  }
};
</script>

