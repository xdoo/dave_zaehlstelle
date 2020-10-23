<template>
  <v-sheet
    width="100%"
    :height="height"
    color="grey lighten-4"
    class="pa-4"
  >
    <span class="caption">Zählstelle</span><br/>
    <span class="headline">102703</span><br/><br/>
    <span class="caption">Am Kapuzinerhölzl - Skageragstr.</span><br/>
    <span class="caption">Stadtbezirk 10, Moosach</span>
  </v-sheet>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ZaehlstelleInfo extends Vue {
  @Prop() height?: number

  mounted() {
    console.log("zaehlstellen-info: " + this.$el.clientHeight)
  }
}
</script>