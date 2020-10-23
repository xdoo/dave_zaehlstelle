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
        <zaehlstelle-map
          height="170"
        ></zaehlstelle-map>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="3">
        <zaehlung-info
          v-on:calc-height="setZaehlungInfoHeight"
        ></zaehlung-info>
        <zaehlungen
          :height="zaehlungenHeight"
        ></zaehlungen>
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
    appbarHeight = 64
    tabsHeight = 72

    zaehlstelleHeight  = 170
    zaehlungInfoHeight = 250


    setZaehlungInfoHeight(h: number) {
      console.log(h)
      this.zaehlungInfoHeight = h
    }

    get contentHeight() {
       const h = this.$vuetify.breakpoint.height - this.appbarHeight - this.zaehlstelleHeight - this.tabsHeight
       console.log("content -> " + h)
       return h
    }

    get zaehlungenHeight() {
      const h = this.$vuetify.breakpoint.height - this.appbarHeight - this.tabsHeight - this.zaehlstelleHeight - this.zaehlungInfoHeight - 15
      console.log("zaehlungen -> " + h)
      return h
    }

}
</script>