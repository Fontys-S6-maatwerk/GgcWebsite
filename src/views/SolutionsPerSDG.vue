<template>
  <div class="homepage">
    <SDGInfo :sdgId="$route.params.sdgId"/>
    <div class="page-content">
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
  import { Component, Vue } from 'vue-property-decorator'
  import SDGInfo from '@/components/SDGs/SDGinfo.vue'

@Component({
  components: {
    SDGInfo,
  }
})

export default class solutionsPerSDG extends Vue {}
</script>
