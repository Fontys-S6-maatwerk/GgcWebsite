<template>
  <span class="label" :style="{backgroundColor: color}">{{number}}.</span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SdgColors from '@/data/SdgColors'

@Component({
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  computed: {
    color: function () {
      return SdgColors[this.$props.number - 1]
    }
  }
})
export default class SolutionExcerpt extends Vue {}
</script>

<style>
</style>
