<template>
  <div class="col-xl-3 col-md-6">
    <router-link to="/creation/81/81-how-to-make-a-herb-spiral/" class="card mb-lg-20">
      <div
        class="card-image position-relative callout lazyloaded"
        data-bgset="public/assets/content/header/81-header.png"
        style="background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/81-header.png');"
      >
        <div
          class="card-user-image position-absolute callout lazyloaded"
          data-bgset="/public/assets/profile/16.png"
          style="background-image: url('https://globalgoalscommunity.eu/public/assets/profile/16.png');"
        >
          <picture style="display: none">
            <source
              data-srcset="/public/assets/profile/16.png"
              sizes="80px"
              srcset="/public/assets/profile/16.png"
            />
            <img
              alt
              class="lazyautosizes lazyloaded ls-is-cached"
              data-sizes="auto"
              data-parent-fit="cover"
              sizes="80px"
            />
          </picture>
        </div>
        <picture style="display: none">
          <source
            data-srcset="public/assets/content/header/81-header.png"
            sizes="445px"
            srcset="public/assets/content/header/81-header.png"
          />
          <img
            alt
            class="lazyautosizes lazyloaded"
            data-sizes="auto"
            data-parent-fit="cover"
            sizes="445px"
          />
        </picture>
      </div>

      <div class="card-info">
        <h4>{{solution.title}}</h4>

        <div class="date">
          <i class="fas fa-globe-europe"></i>
          {{ moment(solution.date).format('ddd D MMMM YYYY hh:mm') }} uur
        </div>

        <div class="content-short">
            {{exerpt}}
        </div>

        <div class="sdgs">
          <sdg-badge v-for="(number, index) in solution.sdgs" v-bind:key="index" :number="number" />
        </div>

        <hr />

        <div class="stats flex">
          <div class="statistic statistic-liked">
            <i class="fa fa-heart"></i>
            {{solution.likes}} likes
          </div>

          <div class="statistic statistic-viewed">
            <i class="fa fa-eye"></i>
            {{solution.views}} views
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Solution from '@/domain/Solution'
import SdgBadge from '@/components/SdgBadge.vue'
import moment from 'moment'

@Component({
  components: {
    SdgBadge
  },
  props: {
    solution: {
      type: Solution,
      required: true
    }
  },
  methods: {
    moment
  },
  computed: {
    exerpt: function () {
      return this.$props.solution.content.replace(/(<([^>]+)>)/ig, '').substring(0, 200)
    }
  }
})
export default class SolutionExcerpt extends Vue {}
</script>

<style>
</style>
