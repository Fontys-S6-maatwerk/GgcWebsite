<template>
  <div class="home-content background-offwhite py-md-40 py-100">
    <img
      class="circles circles-populair-home-left lazyloaded"
      data-src="../../assets/images/circles/circles-2x.png"
      alt
      src="../../assets/images/circles/circles-2x.png"
    />
    <img
      class="circles circles-populair-home-right ls-is-cached lazyloaded"
      data-src="../../assets/images/circles/circles.png"
      alt
      src="../../assets/images/circles/circles.png"
    />

    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-md-7">
            <h2>Populaire oplossingen</h2>

            <div class="row mt-20">
              <div class="col-lg-10">
                <p>
                  Hieronder staan de populairste praktische oplossingen van
                  het platform. Deze zijn gebaseerd op het aantal weergaven.
                  Zijn deze oplossingen hun plek waard?
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
      solutions: solutions.filter(solution => [3, 1, 9, 32].includes(solution.id))
    }
  }
})
export default class PopularSolutions extends Vue {}
</script>

<style>
</style>
