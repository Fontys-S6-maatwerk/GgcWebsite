<template>
  <div class="home-content background-offwhite my-md-40 my-100 py-60 display-none-md">
    <div class="container partners">
      <div class="flex space-between align-items-center">
        <div class="left">
          <strong>Partners van</strong>

          <div
            class="image-ggc background-size-contain background-no-repeat mt-15"
            :style="{backgroundImage: 'url('+images.ggcLogo+')'}"
          ></div>
        </div>

        <div class="right flex">
          <router-link to="https://www.ecodorpennetwerk.nl/" target="_blank" class="ml-15">
            <div
              class="logo-partner background-position-center background-size-contain background-no-repeat"
              :style="{backgroundImage: 'url('+images.genLogo+')'}"
            ></div>
          </router-link>
          <router-link to="https://www.ecodorpboekel.nl/" target="_blank" class="ml-15">
            <div
              class="logo-partner background-position-center background-size-contain background-no-repeat"
              :style="{backgroundImage: 'url('+images.ecodorpBoekelLogo+')'}"
            ></div>
          </router-link>
          <router-link
            to="https://fontys.nl/Over-Fontys/Fontys-Hogeschool-ICT.htm"
            target="_blank"
            class="ml-15"
          >
            <div
              class="logo-partner background-position-center background-size-contain background-no-repeat"
              :style="{backgroundImage: 'url('+images.fontysLogo+')'}"
            ></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ggcLogoImage from '@/assets/images/Logo_GGC.png'
import genLogoImage from '@/assets/images/partners/gen_nederland.png'
import ecodorpBoekelLogoImage from '@/assets/images/partners/ecodorp_boekel.png'
import fontysLogoImage from '@/assets/images/partners/fontys_hogeschool_ict.png'

@Component({
  data: function () {
    return {
      images: {
        ggcLogo: ggcLogoImage,
        genLogo: genLogoImage,
        ecodorpBoekelLogo: ecodorpBoekelLogoImage,
        fontysLogo: fontysLogoImage
      }
    }
  }
})
export default class Partners extends Vue {}
</script>

<style>
</style>
