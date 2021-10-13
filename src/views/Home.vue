<template>
  <div class="homepage">
    <HomepageWelcome />

    <div class="page-content">
      <UspRow />
      <AboutGoals />
      <HighlightedSolutions />
    </div>

    <Testimonials />
    <PopularSolutions />
    <Partners />
    <NewSolutions />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomepageWelcome from '@/components/Homepage/HomepageWelcome.vue'
import UspRow from '@/components/Homepage/UspRow.vue'
import AboutGoals from '@/components/Homepage/AboutGoals.vue'
import HighlightedSolutions from '@/components/Homepage/HighlightedSolutions.vue'
import Testimonials from '@/components/Homepage/Testimonials.vue'
import PopularSolutions from '@/components/Homepage/PopularSolutions.vue'
import Partners from '@/components/Homepage/Partners.vue'
import NewSolutions from '@/components/Homepage/NewSolutions.vue'

@Component({
  components: {
    HomepageWelcome,
    UspRow,
    AboutGoals,
    HighlightedSolutions,
    Testimonials,
    PopularSolutions,
    Partners,
    NewSolutions
  }
})
export default class Home extends Vue {}
</script>
