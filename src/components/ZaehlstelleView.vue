<template>
  <v-container
    fluid class="pa-0"
  >
    <!-- Zaehlstelleninformation -->
    <v-row
      no-gutters
    >
      <v-col
        cols="3"
      >
        <zaehlstelle-info
          height="170"
        ></zaehlstelle-info>
      </v-col>
      <v-col
        cols="9"
      >
        <zaehlstelle-map></zaehlstelle-map>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="3">
        <zaehlung-info></zaehlung-info>
        <zaehlungen></zaehlungen>
      </v-col>
      <v-col cols="9">
        <diagramme></diagramme>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

// Components
import ZaehlstelleMap from "@/components/ZaehlstelleMap.vue"
import ZaehlstelleInfo from "@/components/ZaehlstelleInfo.vue"
import ZaehlungInfo from "@/components/ZaehlungInfo.vue"
import Zaehlungen from "@/components/Zaehlungen.vue"
import Diagramme from "@/components/Diagramme.vue"

@Component({
  components: {
    ZaehlstelleMap,
    ZaehlstelleInfo,
    ZaehlungInfo,
    Zaehlungen,
    Diagramme
  }
})
export default class ZaehlstelleView extends Vue {
    
}
</script>