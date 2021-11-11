<template>
  <div class="AddSolution">
    <div class="page-content">
      <SolutionType v-if="showSolutionTypes==true" />
      <Article v-if="showArticles==true" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import SolutionType from "@/components/AddSolution/SolutionType.vue";
import Article from "@/components/AddSolution/Article.vue";

export default {
  name: "AddSolution",
  components: {
    SolutionType,
    Article,
  },

  data: () => ({
    showSolutionTypes: true,
    showArticles: false,
  }),

  mounted() {},

  methods: {
    createArticle: function () {

    }
  },

  computed: {},
};
</script>