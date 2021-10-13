<template>
  <div class="home-content background-white py-md-40 py-100 about-ggc">
    <div class="container">
      <div class="content">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="mb-20">
              About Global
              <span class="text-highlight">Goals</span> Community
            </h2>

            <div class="text-justify">
              <p>
                We believe that every individual can contribute to
                creating a better world for the next generations, we help
                you connect with the people and knowledge you need to get
                started today, for a better world tomorrow.
              </p>
              <p>
                <br data-cke-filler="true" />
              </p>
              <p>
                Anyone who is interested in making their life more
                sustainable and has the resources to do so. Anyone who
                wants to learn about the 17 SDGs and how to apply this
                into their day to day life. Anyone who wants to co-create
                and make the world a better place, for today, tomorrow and
                the next generations! We want everyone to feel included,
                from gender to skin colour to sexual orientation to
                financial status. We kindly ask you to pay close attention
                to these differences and take this with you on all
                communication fronts.
              </p>
            </div>

            <p class="mt-20 mb-md-20">
              <router-link
                to="/about-ggc/"
                class="flex flex-end flex-start-md flex-end-lg align-center bold-text"
              >
                Read more about GGC
                <i class="fas fa-angle-right ml-10"></i>
              </router-link>
            </p>
          </div>

          <div class="offset-lg-1 col-lg-5">
            <img
              class="ggc-image box-shadow border-radius lazyloaded"
              data-src="../../assets/images/impressie-def-ontwerp.jpg"
              alt="Global Goals Community Ecodorp schetsen"
              src="../../assets/images/impressie-def-ontwerp.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class AboutGoals extends Vue {}
</script>

<style>
</style>
