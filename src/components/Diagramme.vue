<template>
  <v-tabs
    fixed-tabs
    background-color="grey darken-1"
    dark
    icons-and-text
  >
    <v-tab>
      Belastungsplan
      <v-icon>mdi-arrow-decision</v-icon>
    </v-tab>
    <v-tab>
      Ganglinie
      <v-icon>mdi-chart-histogram</v-icon>
    </v-tab>
    <v-tab>
      Listenausgabe
      <v-icon>mdi-table</v-icon>
    </v-tab>
    <v-tab>
      Heatmap
      <v-icon>mdi-chart-bubble</v-icon>
    </v-tab>
    <v-tab>
      Zeitreihe
      <v-icon>mdi-chart-line</v-icon>
    </v-tab>
  </v-tabs>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Diagramme extends Vue {
    
}
</script>