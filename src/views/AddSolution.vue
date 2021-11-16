<template>
  <div class="AddSolution">
    <component @nextStep="changeStep" v-bind:is="selectedComponent"></component>
  </div>
</template>

<script>
/* eslint-disable */
import SolutionType from "@/components/AddSolution/SolutionType.vue";
import Article from "@/components/AddSolution/Article.vue";
import HowTo from "@/components/AddSolution/HowTo.vue";
import Video from "@/components/AddSolution/Video.vue";
import Podcast from "@/components/AddSolution/Podcast.vue";

export default {
  name: "AddSolution",
  components: {
    SolutionType,
    Article,
    HowTo,
    Video,
    Podcast
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