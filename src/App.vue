<template>
  <v-app dark>
    <app-header/>
    <v-content>
      <router-view/>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }

</script>

