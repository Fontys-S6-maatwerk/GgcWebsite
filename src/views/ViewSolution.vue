<script>
/* eslint-disable */
</script>

<template>
  <div class="page-content pt-md-40 pt-60">
    <div class="page-navigation">
      <div class="container">
        <div class="content">
          <Breadcrumbs :items="breadcrumbItems" />
        </div>
      </div>
    </div>

    <div class="content-information py-60">
      <img
        class="circles circles-content-left rotate-190"
        src="../assets/images/circles/circles.png"
      />

      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-xl-7">
              <div class="row flex-column-reverse flex-xl-row">
                <div class="col-xl-12">
                  <span id="creation-id" style="display: none">31</span>

                  <h2 class="mb-60">{{ solution.title }}</h2>
                </div>
              </div>

              <div>
                <span class="user-profile flex flex-start align-center">
                  <router-link :to="'/profile/' + solution.author.slug + '/'">
                    <div
                      class="
                        user-profile-image
                        circle-border-md
                        background-position-center
                        background-size-cover
                        background-white
                        flex
                        align-center
                        justify-center
                      "
                      :style="{
                        backgroundImage:
                          'url(\'https://globalgoalscommunity.eu/public/assets/profile/' +
                          solution.author.id +
                          '.png\')',
                      }"
                    ></div>
                  </router-link>

                  <div class="pl-10">
                    <span class="creator bold-text">
                      <a
                        v-bind-href="'/profile/' + solution.author.name + '/'"
                        >{{ solution.author.name }}</a
                      >

                      <span
                        class="follow-button light-text ml-15"
                        data-user-id="16"
                        data-redirect="/login/?r=creation"
                        >Volgen</span
                      >
                    </span>

                    <p class="date mt-5">{{ solution.date }}</p>
                  </div>
                </span>
              </div>

              <div class="sdg-container flex flex-col align-start mb-40">
                <sdg-badge
                  v-for="(number, index) in solution.sdgs"
                  v-bind:key="index"
                  :number="number"
                />
              </div>

              <div
                class="
                  creation-header-image
                  border-radius
                  box-shadow
                  mb-sm-20 mb-40
                  callout
                  lazyloaded
                "
                data-bgset="/public/assets/content/header/31-header.jpg"
                style="
                  background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/31-header.jpg');
                "
              >
                <picture style="display: none">
                  <source
                    data-srcset="/public/assets/content/header/31-header.jpg"
                    sizes="721px"
                    srcset="/public/assets/content/header/31-header.jpg"
                  />
                  <img
                    alt
                    class="lazyautosizes lazyloaded ls-is-cached"
                    data-sizes="auto"
                    data-parent-fit="cover"
                    sizes="721px"
                  />
                </picture>
              </div>
              <div>
                <div
                  class="creation-content text-justify pb-40 ck-content"
                  v-html="solution.content"
                  v-if="!!solution.content"
                />
                <div v-else-if="solution.steps">
                  <div><p>{{solution.introduction}}</p></div>
                  <div><p>{{solution.difficulty}}</p></div>
                  <div
                    v-for="(item, index) in solution.steps"
                    :sol-id="index"
                    :sol-name="item"
                    :key="index"
                  >
                    <div class="creation-content text-justify pb-40 ck-content">
                      <h2> Stap {{ index + 1}}.</h2>
                      <p>{{ item }}</p>
                    </div>
                  </div>
                  <h3>materials</h3>
                  <div
                    v-for="(item, index) in solution.materials"
                    :sol-id="index"
                    :sol-name="item"
                    :key="index"
                  >
                    <div class="creation-content text-justify pb-40 ck-content">

                      <p>{{ item }}</p>
                    </div>
                  </div>
                  <h3>Tools</h3>
                  <div
                    v-for="(item, index) in solution.tools  "
                    :sol-id="index"
                    :sol-name="item"
                    :key="index"
                  >
                    <div class="creation-content text-justify pb-40 ck-content">
 
                      <p>{{ item }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="statistics flex">
                <div class="statistic flex flex-row align-center pr-30">
                  <svg
                    class="svg-inline--fa fa-eye fa-w-18"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="eye"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                    />
                  </svg>
                  <!-- <i class="fas fa-eye"></i> -->
                  <p class="pl-10 view_count">{{ solution.views }}</p>
                </div>

                <div class="statistic flex flex-row align-center pr-30">
                  <svg
                    class="svg-inline--fa fa-heart fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="heart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                    />
                  </svg>
                  <!-- <i class="fas fa-heart"></i> -->
                  <p class="pl-10 like_count">{{ solution.likes }}</p>
                </div>

                <div class="statistic flex flex-row align-center pr-30">
                  <svg
                    class="svg-inline--fa fa-comment fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="comment"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                    />
                  </svg>
                  <!-- <i class="fas fa-comment"></i> -->
                  <p class="pl-10 comment_count">0</p>
                </div>

                <div class="statistic flex flex-row align-center pr-30">
                  <svg
                    class="svg-inline--fa fa-save fa-w-14"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="save"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"
                    />
                  </svg>
                  <!-- <i class="fas fa-save"></i> -->
                  <p class="pl-10 saved_count">0</p>
                </div>
              </div>
              <hr />

              <div
                id="share"
                class="
                  share-action
                  inline-flex
                  align-center
                  background-offwhite
                  border-radius
                  p-10
                "
              >
                <div
                  class="
                    user-profile-image
                    circle-border-md
                    background-position-center
                    background-size-cover
                    background-white
                    flex
                    align-center
                    justify-center
                  "
                  style="background-image: url('/public/assets/profile/44.jpg')"
                ></div>

                <span class="px-15 border-radius">
                  Deel mijn oplossing met vrienden
                  <svg
                    class="svg-inline--fa fa-chevron-right fa-w-10 ml-15"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    />
                  </svg>
                  <!-- <i class="fas fa-chevron-right ml-15"></i> -->
                </span>
              </div>
            </div>

            <div class="col-xl-4 offset-xl-1">
              <div class="add-comment background-offwhite py-md-40 py-30">
                <div class="container px-30">
                  <div class="content">
                    <div class="row">
                      <div class="col-xl-12">
                        <h3 class="mb-10">Plaats een reactie</h3>

                        <p class="mb-30">Om te reageren moet u ingelogd zijn</p>

                        <a href="/login/?r=creation" class="btn btn-primary"
                          >Inloggen</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import BreadcrumbItem from "@/domain/BreadcrumbItem";
import SdgBadge from "@/components/SdgBadge.vue";
import solutions from "@/data/Solutions";

@Component({
  components: {
    Breadcrumbs,
    SdgBadge,
  },
  data() {
    return {
      solution: solutions.filter(
        (solution) => solution.id === parseInt(this.$route.params.id)
      )[0],
      breadcrumbItems: [
        new BreadcrumbItem("Oplossing", "/search/"),
        new BreadcrumbItem(
          solutions.filter(
            (solution) => solution.id === parseInt(this.$route.params.id)
          )[0].title,
          null
        ),
      ],
    };
  },
})
export default class ViewSolution extends Vue {}
</script>
