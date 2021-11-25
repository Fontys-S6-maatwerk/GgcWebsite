<script>
/* eslint-disable */
</script>

<template>
  <div class="sdg-content">
    <div class="container">
      <div class="content">
        <div class="row mt-40">
          <div class="col-7">
            <h2 class="mb-20">Waar ben je naar opzoek?</h2>
            <form id="search-form" class="mb-50">
              <div class="input-wrapper">
                <input
                  id="search-input"
                  class="input input-title p-20 full-width"
                  placeholder="Waar ben je naar opzoek?"
                  value=""
                />
              </div>
            </form>
            <h2 class="mb-40">Alle resultaten</h2>
            <div class="sort flex space-between mb-30">
              <div>Er zijn {{}} resultaten</div>
              <div class="sort-by flex align-center">
                <div class="bold-text pr-30">Sorteren:</div>
                <select
                  id="sort"
                  data-url="https://globalgoalscommunity.eu/sdgs/1/geen-armoede/"
                  class="dropdown bold-text background-offwhite p-10"
                  name="sort-by"
                >
                  <option value="recent">Recent</option>
                  <option value="likes">Likes</option>
                  <option value="comments">Comments</option>
                  <option value="popular">Populariteit</option>
                </select>
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
          <SDGFilterBlock :showSDGFilter="sdgfilter"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import SolutionExcerpt from '@/components/SolutionExcerpt.vue'
import SDGFilterBlock from '@/components/SDGs/SDGFilterBlock.vue'

export default {
  components:{
    SolutionExcerpt,
    SDGFilterBlock,
  },
  props:['sdgfilter','solutions'],
  data: () => ({
    checkedSDGS: [],
  }),

  mounted() {
    this.title = "Dashboard";
  },

  methods: {},

  computed: {},
};
</script>