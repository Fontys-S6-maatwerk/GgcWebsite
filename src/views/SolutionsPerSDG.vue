<template>
  <div class="homepage">
    <SDGInfo :sdg="$route.params" />
    <div class="page-content">
      <div class="page-navigation">
        <div class="container">
          <div class="content">
            <Breadcrumbs :items="breadcrumbItems" />
          </div>
        </div>
      </div>
      <SDGfilter :sdgfilter="false" :solutions="solution" />
      {{ getSolutions }}
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import MockSolutions from "@/data/Solutions";
import SDGInfo from "@/components/SDGs/SDGinfo.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import BreadcrumbItem from "@/domain/BreadcrumbItem";
import SDGfilter from "@/components/SDGs/SDGfilter.vue";
import axios from "axios";
import VueAxios from "vue-axios";

@Component({
  components: {
    SDGInfo,
    Breadcrumbs,
    SDGfilter,
  },
  data() {
    return {
      solution: [],
      breadcrumbItems: [
        new BreadcrumbItem("SDGs", "/sdgs/"),
        new BreadcrumbItem(this.$route.params.name, null),
      ],
      
    };
  },
  mounted() {
         axios
         .get('localhost:5011/Solutions/sdg?id=db25e2d5-23bb-4ac0-27d9-08d9b3e9dd3b')
         .then(response => {this.solution = response}).catch(e => console.log)
      },
  computed: {
    getSolutions: function () {
      return this.solution;
    },
  },
})
export default class solutionsPerSDG extends Vue {}
</script>
