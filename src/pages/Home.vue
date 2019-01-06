<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
        <v-btn @click="start">Start</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  import router from '../router';

  export default {
    mounted () {
      const start = sessionStorage.getItem( 'start' );
      if( start ) router.push({ 'name': 'search' });
    },
    methods: {
      start () {
        router.push({ name: 'search' });
        this.$store.commit( 'setStart', true );
        sessionStorage.setItem( 'start', true );
      }
    },
  }
</script>
