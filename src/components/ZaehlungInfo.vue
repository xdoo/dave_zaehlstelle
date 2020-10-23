<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-sheet
        width="100%"
        height="72"
        color="primary"
        class="px-4 py-2 white--text"
      >
        <span>22.10.2019 | VZ Baubergerstr.</span><br/>
        <v-icon class="mt-2 mr-2" color="white">mdi-weather-snowy-heavy</v-icon>
        <v-icon class="mt-2 mr-2" color="white">mdi-hours-24</v-icon>
        <v-icon class="mt-2 mr-2" color="white">mdi-clipboard-account-outline</v-icon>
      </v-sheet>
    </v-row>
    <v-row no-gutters>
      <v-sheet
        width="100%"
        min-height="50"
        color="blue lighten-3"
        class="px-4 py-3 "
      >
        <v-row no-gutters>
          <v-col cols="1"><v-icon small color="blue darken-2">mdi-clock-time-four-outline</v-icon></v-col>
          <v-col cols="10">
            <span class="caption blue--text text--darken-2"><span class="font-weight-medium">0h</span> bis <span class="font-weight-medium">24h</span> in <span class="font-weight-medium">15 Min.</span> Intervallen</span>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="1"><v-icon small color="blue darken-2">mdi-arrow-decision</v-icon></v-col>
          <v-col><span class="caption blue--text text--darken-2">1 Am Kapuzinerhölzl</span></v-col>
          <v-col><span class="caption blue--text text--darken-2">[Nord]</span></v-col>
          <v-col><span class="caption blue--text text--darken-2 font-weight-medium">von</span></v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="1"></v-col>
          <v-col><span class="caption blue--text text--lighten-5">1 Skagerrakstr.</span></v-col>
          <v-col><span class="caption blue--text text--lighten-5">[Ost]</span></v-col>
          <v-col></v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="1"></v-col>
          <v-col><span class="caption blue--text text--darken-2">3 Am Kapuzinerhölzl</span></v-col>
          <v-col><span class="caption blue--text text--darken-2">[Süd]</span></v-col>
          <v-col><span class="caption blue--text text--darken-2 font-weight-medium">nach</span></v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="1"></v-col>
          <v-col><span class="caption blue--text text--lighten-5">4 Schragenhofstr.</span></v-col>
          <v-col><span class="caption blue--text text--lighten-5">[West]</span></v-col>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col>
            <v-btn
              small
              color="orange darken-2"
              class="white--text"
            >
              <v-icon left>
                mdi-filter-outline
              </v-icon>
              Daten Selektieren
            </v-btn>
          </v-col>          
        </v-row>
      </v-sheet>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZaehlungInfo extends Vue{

  /**
   * Die Höhe des Elements ist dynamisch und muss deshalb
   * zur Laufzeit ermittelt werden.
   */
  mounted() {
    this.$emit("calc-height", this.$el.clientHeight)
  }

}
</script>