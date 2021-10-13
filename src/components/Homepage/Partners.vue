<template>
  <div class="home-content background-offwhite my-md-40 my-100 py-60 display-none-md">
    <div class="container partners">
      <div class="flex space-between align-items-center">
        <div class="left">
          <strong>Partners van</strong>

          <div class="image-ggc ggc-logo background-size-contain background-no-repeat mt-15"></div>
        </div>

        <div class="right flex">
          <router-link to="https://www.ecodorpennetwerk.nl/" target="_blank" class="ml-15">
            <div class="logo-partner gen-logo background-position-center background-size-contain background-no-repeat"></div>
          </router-link>
          <router-link to="https://www.ecodorpboekel.nl/" target="_blank" class="ml-15">
            <div class="logo-partner ecodorp-boekel-logo background-position-center background-size-contain background-no-repeat"></div>
          </router-link>
          <router-link
            to="https://fontys.nl/Over-Fontys/Fontys-Hogeschool-ICT.htm"
            target="_blank"
            class="ml-15"
          >
            <div class="logo-partner fontys-logo background-position-center background-size-contain background-no-repeat"></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Partners extends Vue {}
</script>

<style>
.ggc-logo {
  background-image: url(../../assets/images/Logo_GGC.png);
}
.gen-logo {
  background-image: url(../../assets/images/partners/gen_nederland.png);
}
.ecodorp-boekel-logo {
  background-image: url(../../assets/images/partners/ecodorp_boekel.png);
}
.fontys-logo {
  background-image: url(../../assets/images/partners/fontys_hogeschool_ict.png);
}
</style>
