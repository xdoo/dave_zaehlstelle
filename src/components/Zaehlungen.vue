<template>
  <v-sheet
    with="100%"
    color="grey lighten-4"
    class="pa-4"
  >
    <v-text-field
      label="Zählung suchen"
      dense
      outlined
      prepend-inner-icon="mdi-magnify"
      append-icon="mdi-information-outline"
      class="mt-5"
    ></v-text-field>

    
  </v-sheet>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Zaehlungen extends Vue {

}
</script>