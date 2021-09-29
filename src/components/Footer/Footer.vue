<template>
  <footer class="pt-md-40 pt-100">
    <div class="footer-bottom">
      <div class="container">
        <div class="row pt-100 pb-50 flex-col flex-lg-row-reverse">
          <div class="col-sm-8 col-md-8 col-lg-4"></div>

          <div class="col-lg-8 py-0 py-md-20 px-30 px-lg-20 px-sm-40">
            <div class="row flex-col">
              <img
                class="logo mb-30 lazyloaded"
                data-src="../../assets/images/Logo_GGC_slogan_white.png"
                alt="GGC Logo"
                src="../../assets/images/Logo_GGC_slogan_white.png"
              />

              <SocialIcons />
            </div>

            <div class="row footer-items mb-60">
              <div class="col-md-4 flex flex-col align-start pl-0 mb-md-20">
                <p class="items-header mb-20">Organisatie</p>
                <router-link class="mb-20" to="/about-ggc/">Over GGC</router-link>
                <router-link class="mb-20" to="/privacy-verklaring/">Privacy verklaring</router-link>
                <router-link class="mb-20" to="/cookie-consent/">Cookie statement</router-link>
              </div>

              <div class="col-md-4 flex flex-col align-start pl-0 mb-md-20">
                <p class="items-header mb-20">Sdg</p>
                <router-link class="mb-20" to="/sdgs/">Wat zijn SDG's?</router-link>
                <router-link class="mb-20" to="/sdgs/">Alle SDG's</router-link>
                <router-link class="mb-20" to="/search/">Zoeken</router-link>
              </div>
            </div>

            <div class="row">
              <small class="light-text text-white">
                © 2021 Global Goals Community. Alle rechten voorbehouden.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import '@/assets/images/Logo_GGC_slogan_white.png'
import SocialIcons from './SocialIcons.vue'

export default {
  components: {
    SocialIcons
  }
}
</script>
