<template>
  <div class="homepage">
      <SearchWelcome />
    <div class="page-content">
      <div class="page-navigation">
        <div class="container">
          <div class="content">
          </div>
        </div>
      </div>
      <SDGfilter :sdgfilter="true" :solutions="solution" />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import MockSolutions from '@/data/Solutions'
import { Component, Vue } from "vue-property-decorator";
import SearchWelcome from "@/components/SDGs/SearchWelcome.vue";
import SDGfilter from "@/components/SDGs/SDGfilter.vue";
import Solution from '@/domain/Solution';

@Component({
  components: {
    SearchWelcome,
    SDGfilter,
  },
  data() {
      return{
        solution: MockSolutions
      }
  },
    mounted() {

  },

  computed: {},
})
export default class Search extends Vue {}
</script>
