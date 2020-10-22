<template>
  <v-sheet
    height="170"
    width="100%"
  >
    <l-map
        ref="map"
        :center="[48.17931, 11.51500]"
        :zoom="zoom"
        :options="mapOptions"
      >
       <l-tile-layer
            :url="url"
            :attribution="attribution"
          >
        </l-tile-layer>
        <l-marker
          :lat-lng="[48.17931, 11.51500]"

        >
          <l-icon
            :icon-url="require('@/assets/icons/z.png')"
            :icon-shadow="require('@/assets/shadow.png')"
            :icon-size="[48, 48]"
            :icon-anchor="[24, 48]"
          ></l-icon>
        </l-marker>
        <l-marker
          :lat-lng="[48.17930, 11.51447]"
        >
          <l-icon
            :icon-url="require('@/assets/icons/r.png')"
            :icon-shadow="require('@/assets/shadow.png')"
            :icon-size="[48, 48]"
            :icon-anchor="[24, 48]"
          ></l-icon>
        </l-marker>

      </l-map>

  </v-sheet>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZaehlstelleMap extends Vue{
  zoom = 17
  url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

  get mapOptions() {
    return {preferCanvas: true}
  }

}
</script>