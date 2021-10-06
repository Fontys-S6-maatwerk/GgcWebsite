<template>
  <div
    class="header-home background-white flex justify-center align-center py-lg-60 py-md-20 py-120"
  >
    <img
      class="circles circles-header-home-left ls-is-cached lazyloaded"
      :data-src="images.circles"
      alt
      :src="images.circles"
    />
    <div class="container">
      <div class="content">
        <div class="row align-center justify-center my-30">
          <div class="col-xl-8">
            <h1>
              Welkom terug bij
              <br />Global
              <span class="text-highlight">Goals</span> Community!
            </h1>

            <div class="row mt-30">
              <div class="col-lg-10">
                <div>
                  <p>
                    Dé plek om samen met anderen aan de slag te gaan met het
                    verbeteren van de wereld. Aan de hand van de 17
                    Sustainable Development Goals kun je oplossingen delen
                    en bekijken, meer leren over duurzaam leven en word je
                    geïnspireerd om hier zelf mee aan de slag te gaan.
                    Klinkt dit interessant? Kijk dan vooral rond!
                  </p>
                </div>
              </div>
            </div>

            <div class="flex my-40">
              <router-link to="/register/" class="btn btn-orange mr-40">Meld je aan</router-link>

              <router-link to="/search/" class="text-center">
                Ga verder zonder
                <br />aan te melden
              </router-link>
            </div>

            <div class="row mt-30 display-none-xs">
              <div class="col-lg-8">
                <div class="flex mt-10">
                  <div class="solutions mr-40">
                    <router-link to="/search/">
                      <i class="fas fa-lightbulb mr-10"></i>
                      43 oplossingen
                    </router-link>
                  </div>

                  <div class="active-users">
                    <i class="fas fa-snowboarding mr-10"></i>
                    <path
                      fill="currentColor"
                      d="M432 96c26.5 0 48-21.5 48-48S458.5 0 432 0s-48 21.5-48 48 21.5 48 48 48zm28.8 153.6c5.8 4.3 12.5 6.4 19.2 6.4 9.7 0 19.3-4.4 25.6-12.8 10.6-14.1 7.8-34.2-6.4-44.8l-111.4-83.5c-13.8-10.3-29.1-18.4-45.4-23.8l-63.7-21.2-26.1-52.1C244.7 2 225.5-4.4 209.7 3.5c-15.8 7.9-22.2 27.1-14.3 42.9l29.1 58.1c5.7 11.4 15.6 19.9 27.7 24l16.4 5.5-41.2 20.6c-21.8 10.9-35.4 32.8-35.4 57.2v53.1l-74.1 24.7c-16.8 5.6-25.8 23.7-20.2 40.5 1.7 5.2 4.9 9.4 8.7 12.9l-38.7-14.1c-9.7-3.5-17.4-10.6-21.8-20-5.6-12-19.9-17.2-31.9-11.6s-17.2 19.9-11.6 31.9c9.8 21 27.1 36.9 48.9 44.8l364.8 132.7c9.7 3.5 19.7 5.3 29.7 5.3 12.5 0 24.9-2.7 36.5-8.2 12-5.6 17.2-19.9 11.6-31.9S474 454.7 462 460.3c-9.3 4.4-19.8 4.8-29.5 1.3l-90.8-33.1c8.7-4.1 15.6-11.8 17.8-21.9l21.9-102c3.9-18.2-3.2-37.2-18.1-48.4l-52-39 66-30.5 83.5 62.9zm-144.4 51.7l-19.7 92c-1.5 7.1-.1 13.9 2.8 20l-169.4-61.6c2.7-.2 5.4-.4 8-1.3l85-28.4c19.6-6.5 32.8-24.8 32.8-45.5V256l60.5 45.3z"
                    />78 actieve gebruikers
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4">
            <div class="flex justify-center">
              <div
                class="community-image border-radius box-shadow background-size-cover background-position-center position-relative mt-xs-20 mt-lg-60"
                :style="{backgroundImage: 'url('+images.communityGroup+')'}"
              >
                <div
                  class="community-user-top position-absolute circle-lg circle-border-md box-shadow flex align-center justify-center background-position-center background-size-cover"
                  :style="{backgroundImage: 'url('+images.profile.p22+')'}"
                ></div>

                <div
                  class="user-message-top position-absolute background-white border-radius px-15 py-5"
                >295 likes</div>

                <div
                  class="community-user-bottom position-absolute circle-lg circle-border-md box-shadow flex align-center justify-center background-position-center background-size-cover"
                  :style="{backgroundImage: 'url('+images.profile.p15+')'}"
                ></div>

                <div
                  class="user-message-bottom position-absolute background-white border-radius px-15 py-5"
                >Together we build a better world!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import circlesImage from '@/assets/images/circles/circles.png'

import profile15Image from '@/assets/images/profile/15.png'
import profile22Image from '@/assets/images/profile/22.jpg'
import communityGroupImage from '@/assets/images/community-group.png'

@Component({
  components: {},
  data: function () {
    return {
      images: {
        circles: circlesImage,
        profile: {
          p15: profile15Image,
          p22: profile22Image
        },
        communityGroup: communityGroupImage
      }
    }
  }
})
export default class HomepageWelcome extends Vue {}
</script>

<style>
</style>template
