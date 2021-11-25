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
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import MockSolutions from '@/data/Solutions'
import SDGInfo from "@/components/SDGs/SDGinfo.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import BreadcrumbItem from "@/domain/BreadcrumbItem";
import SDGfilter from "@/components/SDGs/SDGfilter.vue";

@Component({
  components: {
    SDGInfo,
    Breadcrumbs,
    SDGfilter,
  },
  data() {
    return {
      solution:MockSolutions,
      breadcrumbItems: [
        new BreadcrumbItem("SDGs", "/sdgs/"),
        new BreadcrumbItem(this.$route.params.name, null),
      ],
    };
  },
  computed: {},
})
export default class solutionsPerSDG extends Vue {}
</script>
