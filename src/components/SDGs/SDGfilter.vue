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
          <div class="col-5">
            <div class="filter ml-auto p-30 display-none-lg">
              <div class="flex space-between align-center mb-20">
                <h2>Filteren</h2>
              </div>
              <div class="px 20"></div>
              <div>
                <span
                  id="type-filter"
                  class="type-of-solution flex space-between pb-20"
                >
                  <div class="bold-text">Soort oplossingen</div>
                  <span>
                    <svg
                      id="arrow-solutions"
                      class="svg-inline--fa fa-chevron-down fa-w-14"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chevron-down"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                      ></path>
                    </svg>
                  </span>
                </span>
                <div class="types px-20" style>
                  <label class="checkbox-wrapper pb-20">
                    How-to
                    <input
                      type="checkbox"
                      class="checkbox-input type-filter"
                      name="how-to"
                      value="how-to"
                    />
                    <span class="checkbox"></span>
                  </label>
                  <label class="checkbox-wrapper pb-20">
                    Artikelen
                    <input
                      type="checkbox"
                      class="checkbox-input type-filter"
                      name="artikelen"
                      value="artikelen"
                    />
                    <span class="checkbox"></span>
                  </label>
                  <label class="checkbox-wrapper pb-20">
                    Video's
                    <input
                      type="checkbox"
                      class="checkbox-input type-filter"
                      name="videos"
                      value="videos"
                    />
                    <span class="checkbox"></span>
                  </label>
                  <label class="checkbox-wrapper pb-20">
                    Podcasts
                    <input
                      type="checkbox"
                      class="checkbox-input type-filter"
                      name="podcasts"
                      value="podcasts"
                    />
                    <span class="checkbox"></span>
                  </label>
                </div>
              </div>
              <div v-if="true">
                <span id="sdg-filter" class="sdgs flex space-between pb-20">
                  <div class="bold-text">Sustainable Development Goal</div>
                  <span>
                    <svg
                      id="arrow-sdgs"
                      class="svg-inline--fa fa-chevron-down fa-w-14"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chevron-down"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                      ></path></svg
                    ><!-- <i id="arrow-sdgs" class="fas fa-chevron-down"></i> -->
                  </span>
                </span>
                <div class="sdg-filter-items px-20">
                  <label
                    class="checkbox-wrapper pb-20"
                    v-for="item in sdg"
                    v-bind:key="item.name"
                  >
                    <div class="flex">
                      <span class="mr-5">{{ item.id }}.</span>
                      <span>{{ item.name }}</span>
                    </div>
                    <input
                      type="checkbox"
                      class="checkbox-input sdg-filter-item"
                      :id="item.id"
                      :value="item.name"
                      v-model="checkedSDGS"
                    />
                    <span class="checkbox"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Sdgs from "@/data/Sdgs";
import Solutions from '@/data/Solutions'
import SolutionExcerpt from '@/components/SolutionExcerpt.vue'

export default {
  components:{
    SolutionExcerpt
  },
  data: () => ({
    sdg: Sdgs,
    solutions: Solutions,
    checkedSDGS: [],
  }),

  mounted() {
    this.title = "Dashboard";
    axios
      .get("")
      .then(response => (this.solutions = response))
  },

  methods: {},

  computed: {},
};
</script>