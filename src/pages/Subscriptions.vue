<template>
  <v-container grid-list-md>
    <v-snackbar v-model="snackbar" top :timeout="timeout">
      <span class="subheading">{{ message }}</span>
      <v-btn flat @click="snackbar=false">Close</v-btn>
    </v-snackbar>

    <v-layout row wrap>
      <v-flex 
        v-for="(series, index) in subscriptions" 
        :key="index"
        xs3
      >
        <app-image :series="series">
          <template slot="subscriptions-image">
            <v-img
              :src="series.posterUrl"
              contain
              aspect-ratio="0.68"
              class="img"
            />
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
import appImage from '../components/Image.vue';
// import axios from 'axios';

export default {
  components: {
    appImage
  },
  data () {
    return {
      snackbar: false,
      message: '',
      timeout: 2500,
    }
  },
  methods: {
    async remove ( data )  {
      try {
        await this.$store.dispatch( 'unsubscribe', {
          url: '/show', method: 'delete', data
        });
        let response = await this.$store.dispatch( 'getSubscriptions', {
          url: '/shows', method: 'get'
        });
        this.$store.commit( 'setSubscriptions', response.data.data );
      }
      catch( error ){
        this.message = 'Something happened!';
        this.snackbar = true;
      }
    },
  },
  computed: {
    subscriptions () {
      return this.$store.getters.getSubscriptions;
    }
  },
}
</script>


