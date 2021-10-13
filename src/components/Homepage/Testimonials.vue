<template>
  <div class="home-content py-md-40 py-100">
    <div class="container quote">
      <div class="row no-gutters">
        <div class="col-md-5">
          <img
            class="quote-image border-radius-left background-position-center background-size-cover"
            src="../../assets/images/profile/21.jpg"
            style="object-fit: cover; width: 100%"
          />
        </div>

        <div class="col-md-7">
          <div
            class="flex align-items-center border-radius-right background-offwhite full-height px-60 py-sm-40"
          >
            <div class="quote-text">
              <h3 class="mb-20">
                GGC heeft mij geholpen om duurzamer te gaan leven.
                Verschillende oplossingen hebben mij daarbij geholpen,
                super!
              </h3>

              <span>- Rick de Vries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Testimonials extends Vue {}
</script>

<style>
</style>
