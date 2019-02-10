import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// axios.defaults.baseURL = "http://localhost:5000";

export default new Vuex.Store({
  state: {
    started: false,
    subscriptions: [],
    series: [],
    isListView: false
  },
  getters: {
    getStart(state) {
      return state.started;
    },
    getSubscriptions(state) {
      return state.subscriptions;
    },
    getSeries(state) {
      return state.series;
    },
    getIsListView(state) {
      return state.isListView;
    }
  },
  mutations: {
    setStart(state, started) {
      state.started = started;
    },
    setSubscriptions(state, subscriptions) {
      state.subscriptions = subscriptions;
    },
    setSeries(state, series) {
      state.series = series;
    },
    setIsListView(state, value) {
      state.isListView = value;
    }
  },
  actions: {
    search({ }, config) {
      return axios(config);
    },
    subscribe({ }, config) {
      return axios(config);
    },
    unsubscribe({ }, config) {
      return axios(config);
    },
    getSubscriptions({ }, config) {
      return axios(config);
    },
    getSubscriptionsByDay({ }, config) {
      return axios(config);
    }
  }
});
