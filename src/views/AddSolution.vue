<template>
  <div class="AddSolution">
    <component @nextStep="changeStep" v-bind:is="selectedComponent"></component>
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
    selectedComponent: "",
  }),

  mounted() {
    this.selectedComponent = "SolutionType";
  },

  methods: {
    changeStep: function (step) {
      this.selectedComponent = step;
    },
  },

  computed: {},
};
</script>