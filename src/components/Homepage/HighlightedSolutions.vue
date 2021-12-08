<template>
  <div class="home-content background-offwhite py-md-40 py-100">
    <img
      class="circles circles-featured-home-right rotate-70 ls-is-cached lazyloaded"
      data-src="../../assets/images/circles/circles.png"
      alt
      src="../../assets/images/circles/circles.png"
    />

    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-xl-7">
            <h2>Uitgelichte oplossingen</h2>

            <div class="row mt-20">
              <div class="col-md-10">
                <p>
                  Om bepaalde praktische oplossingen ‘in het zonnetje te
                  zetten’ is deze sectie gemaakt. Sommige oplossingen
                  verdienen meer aandacht. Kijk eens of er een oplossing
                  tussen zit die misschien wel iets voor jou is!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-md-40 mt-60">
          <solution-excerpt
            v-for="solution in solutions"
            v-bind:key="solution.id"
            :solution="solution"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SolutionExcerpt from '@/components/SolutionExcerpt.vue'
import solutions from '@/data/Solutions'

@Component({
  components: {
    SolutionExcerpt
  },
  data: function () {
    return {
      solutions: solutions.filter(solution => [31, 32, 33].includes(solution.id))
    }
  }
})
export default class HighlightedSolutions extends Vue {}
</script>

<style>
</style>
