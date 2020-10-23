<template>
  <v-sheet
    with="100%"
    :height="height"
    color="grey lighten-4"
    class="pt-4"
  >
    <v-text-field
      label="Zählung suchen"
      dense
      outlined
      prepend-inner-icon="mdi-magnify"
      append-icon="mdi-information-outline"
      class="mt-5 px-4"
    ></v-text-field>
    <v-sheet
      width="100%"
      height="100%"
      min-height="150"
      color="transparent"
      class="overflow-y-auto"
    >
      <zaehlung
        datum="21.08.2017"
        projekt-name="VZ Irgendwas"
        zaehlart="mdi-alpha-q-circle-outline"
        wetter="mdi-weather-rainy"
        zeit="24"
        hand-zaehlung
        color="grey lighten-5"
      ></zaehlung>
      <zaehlung
        datum="21.08.2017"
        projekt-name="VZ Irgendwas"
        zaehlart="mdi-alpha-q-circle-outline"
        wetter="mdi-weather-rainy"
        zeit="24"
        hand-zaehlung
        color="grey lighten-3"
      ></zaehlung>
      <zaehlung
        datum="21.08.2017"
        projekt-name="VZ Irgendwas"
        zaehlart="mdi-alpha-r-circle-outline"
        wetter="mdi-weather-rainy"
        zeit="24"
        hand-zaehlung
        color="grey lighten-5"
      ></zaehlung>
      <zaehlung
        datum="21.08.2017"
        projekt-name="VZ Irgendwas"
        zaehlart="mdi-alpha-r-circle-outline"
        wetter="mdi-weather-rainy"
        zeit="24"
        hand-zaehlung
        color="grey lighten-3"
      ></zaehlung>
      <zaehlung
        datum="21.08.2017"
        projekt-name="VZ Irgendwas"
        zaehlart="mdi-alpha-q-circle-outline"
        wetter="mdi-weather-rainy"
        zeit="24"
        hand-zaehlung
        color="grey lighten-5"
      ></zaehlung>
      <zaehlung
        datum="21.08.2017"
        projekt-name="VZ Irgendwas"
        zaehlart="mdi-alpha-r-circle-outline"
        wetter="mdi-weather-rainy"
        zeit="24"
        hand-zaehlung
        color="grey lighten-3"
      ></zaehlung>
      <zaehlung
        datum="21.08.2017"
        projekt-name="VZ Irgendwas"
        zaehlart="mdi-alpha-q-circle-outline"
        wetter="mdi-weather-rainy"
        zeit="24"
        hand-zaehlung
        color="grey lighten-5"
      ></zaehlung>
      <zaehlung
        datum="21.08.2017"
        projekt-name="VZ Irgendwas"
        zaehlart="mdi-alpha-q-circle-outline"
        wetter="mdi-weather-rainy"
        zeit="24"
        hand-zaehlung
        color="grey lighten-3"
      ></zaehlung>
      <zaehlung
        datum="21.08.2017"
        projekt-name="VZ Irgendwas"
        zaehlart="mdi-alpha-q-circle-outline"
        wetter="mdi-weather-rainy"
        zeit="24"
        hand-zaehlung
        color="grey lighten-5"
      ></zaehlung>
      <zaehlung
        datum="21.08.2017"
        projekt-name="VZ Irgendwas"
        zaehlart="mdi-alpha-q-circle-outline"
        wetter="mdi-weather-rainy"
        zeit="24"
        hand-zaehlung
        color="grey lighten-3"
      ></zaehlung>
      <zaehlung
        datum="21.08.2017"
        projekt-name="VZ Irgendwas"
        zaehlart="mdi-alpha-q-circle-outline"
        wetter="mdi-weather-rainy"
        zeit="24"
        hand-zaehlung
        color="grey lighten-5"
      ></zaehlung>
    </v-sheet>
  </v-sheet>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import Zaehlung from "@/components/Zaehlung.vue"

@Component ({
  components: {
    Zaehlung
  }
})
export default class Zaehlungen extends Vue {
  @Prop() height?: number
}
</script>