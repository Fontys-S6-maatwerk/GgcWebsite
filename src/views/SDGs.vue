<template>
  <div class="homepage">
    <SDGWelcome />
    <div class="page-content">
      <SDGGeneralInfo />
      <SDGBlocks />
    </div>

  </div>
</template>

<script lang="ts">
/* eslint-disable */
  import { Component, Vue } from 'vue-property-decorator'
  import SDGWelcome from '@/components/SDGs/SDGWelcome.vue'
  import SDGGeneralInfo from '@/components/SDGs/SDGGeneralInfo.vue'
  import SDGBlocks from '@/components/SDGs/SDGBlocks.vue'

@Component({
  components: {
    SDGWelcome,
    SDGGeneralInfo,
    SDGBlocks,
  }
})
export default class SDGs extends Vue {}
</script>
