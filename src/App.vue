<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <span class="title font-weight-light"><span class="font-weight-medium">DAVe </span> | Planungsreferat</span>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <zaehlstelle-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ZaehlstelleView from './components/ZaehlstelleView.vue'


@Component({
  components: {
    ZaehlstelleView
  }
})
export default class App extends Vue{}

</script>
