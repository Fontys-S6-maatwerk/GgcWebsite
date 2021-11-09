<template>
  <router-link class="label" :to="'/sdgs/' + number + '/' + slug + '/'" :style="{backgroundColor: color, marginTop: small ? '0' : '2rem !important', marginRight: '1rem'}">
    {{ number }}.
    {{ !small ? name : '' }}
    </router-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sdgs from '@/data/Sdgs'

@Component({
  props: {
    number: {
      type: Number,
      required: true
    },
    small: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    color: function () {
      return Sdgs[this.$props.number - 1].color
    },
    name: function () {
      return Sdgs[this.$props.number - 1].name
    },
    slug: function () {
      return Sdgs[this.$props.number - 1].name.trim().replace(/[^a-z0-9]/gi, '-').toLowerCase()
    }
  }
})
export default class SolutionExcerpt extends Vue {}
</script>

<style>
</style>
