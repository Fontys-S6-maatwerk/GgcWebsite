<template>
  <div class="header-home background-white flex justify-center align-center py-lg-60 py-md-20 py-120">
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
/* eslint-disable */

export default {


  data: () => ({
    title: "",
  }),

  mounted() {
    this.title = "Dashboard";
  },

  methods: {},

  computed: {}
};
</script>