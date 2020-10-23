<template>
  <v-sheet
    width="100%"
    :color="color"
    outlined
    class="px-4 py-2"
  >
    <span class="caption">{{datum}} | {{projektName}}</span><br/>
    <v-icon small color="black" class="mt-1 mr-2">{{zaehlart}}</v-icon>
    <v-icon small color="black" class="mt-1 mr-2">{{wetter}}</v-icon>
    <v-icon small color="black" class="mt-1 mr-2">mdi-hours-24</v-icon>
    <v-icon small color="black" class="mt-1 mr-2">mdi-clipboard-account-outline</v-icon>
  </v-sheet>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Zaehlung extends Vue {
  @Prop() datum?: string
  @Prop() projektName?: string
  @Prop() zaehlart?: string
  @Prop() wetter?: string
  @Prop() zeit?: number
  @Prop() handZaehlung?: boolean
  @Prop() color?: string
}
</script>