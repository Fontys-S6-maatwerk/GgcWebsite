<template>
  <div class="homepage">
    <SDGWelcome />
    <div class="page-content">
      <SDGinfo />
      <SDGBlocks />
    </div>

  </div>
</template>

<script lang="ts">
/* eslint-disable */
  import { Component, Vue } from 'vue-property-decorator'
  import SDGWelcome from '@/components/SDGs/SDGWelcome.vue'
  import SDGinfo from '@/components/SDGs/SDGinfo.vue'
  import SDGBlocks from '@/components/SDGs/SDGBlocks.vue'

@Component({
  components: {
    SDGWelcome,
    SDGinfo,
    SDGBlocks,
  }
})
export default class SDGs extends Vue {}
</script>
