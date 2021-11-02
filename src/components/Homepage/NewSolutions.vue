<template>
  <div class="home-content background-offwhite py-md-40 py-100">
    <img class="circles circles-recent-home-left" src="../../assets/images/circles/circles.png" />
    <img
      class="circles circles-recent-home-right rotate-80"
      src="../../assets/images/circles/circles.png"
    />

    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-md-7">
            <h2>Nieuwste oplossingen</h2>

            <div class="row mt-20">
              <div class="col-lg-10">
                Hier staan de nieuwste praktische oplossingen die op GGC
                zijn geplaatst
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
      solutions: solutions.filter(solution => [96, 82, 69].includes(solution.id))
    }
  }
})
export default class NewSolutions extends Vue {}
</script>

<style>
</style>
