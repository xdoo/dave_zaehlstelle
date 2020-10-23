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

    <v-tab-item>
      <v-sheet
        width="100%"
        :height="height"
        color="grey lighten-5"
      >
        <sample-chart></sample-chart>
      </v-sheet>
    </v-tab-item>
    <v-tab-item>
      Ganlinie
    </v-tab-item>
    <v-tab-item>
      Tabelle
    </v-tab-item>
    <v-tab-item>
      Heatmap
    </v-tab-item>
    <v-tab-item>
      Zeitreihe
    </v-tab-item>
  </v-tabs>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

// charts
import SampleChart from "@/components/charts/SampleChart.vue"

@Component({
  components: {
    SampleChart
  }
})
export default class Diagramme extends Vue {
  @Prop() height?: number
}
</script>