<template lang="">
    <header class="background-white px-sm-20">
        <div class="container">
            <div id="menu" class="content">
                <div class="menu-group flex align-center">
                    <div class="logo mr-100">
                        <router-link to="/">
                            <img src="../../assets/images/Logo_GGC.png" alt="Global Goals Community">
                        </router-link>
                    </div>

                    <div class="menu-items menu-desktop text-center">
                        <menu-item to="/">{{ $t('Home') }}</menu-item>
                        <menu-item to="/sdgs/">{{ $t('Sdgs') }}</menu-item>
                        <menu-item to="/scoreboard/">{{ $t('Leaderboard') }}</menu-item>
                        <menu-item to="/search/">{{ $t('Search') }}</menu-item>
                        <menu-item to="/dashboard/">{{ $t('Dashboard') }}</menu-item>
                        <router-link class="btn btn-orange small-text" to="/add-content/">
                            <svg class="svg-inline--fa fa-plus fa-w-14 mr-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <i class="fas fa-plus mr-5"></i> -->
                            {{ $t('Add solution') }}
                        </router-link>
                    </div>
                </div>

                <div class="menu-options menu-desktop flex flex-end align-center">
                    <LanguagePicker />
                    <AuthButtons />
                </div>

                <span id="toggle" class="toggle" v-on:click="toggleMenu()">
                    <svg v-if="isMenuOpen" class="svg-inline--fa fa-times fa-w-14 menu-icon align-self-center active fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path></svg>
                    <svg v-else class="svg-inline--fa fa-bars fa-w-14 menu-icon align-self-center active fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                </span>
            </div>
        </div>

        <div id="menu-mobile" :class="['menu-mobile', 'transition', 'background-white', 'text-center-lg', isMenuOpen ? '' : 'closed']">
            <div class="container">
                <div class="menu-items flex flex-col space-between align-center justify-center p-sm-20 p-md-60 p-60">
                    <router-link to="/" class="active bold-text h3 mb-sm-20 mb-60">{{ $t('Home') }}</router-link>
                    <router-link to="/sdgs/" class=" bold-text mb-sm-20 h3 mb-60">{{ $t('Sdgs') }}</router-link>
                    <router-link to="/search/" class=" bold-text mb-sm-20 h3 mb-60">{{ $t('Search') }}</router-link>
                    <router-link to="/dashboard/" class=" bold-text mb-sm-20 h3 mb-60">{{ $t('Dashboard') }}</router-link>
                    <router-link class="btn btn-orange mb-30" to="/add-content/">
                        <svg class="svg-inline--fa fa-plus fa-w-14 mr-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <i class="fas fa-plus mr-5"></i> -->
                        {{ $t('Add solution') }}
                    </router-link>
                    <div class="flex flex-col-sm align-center">
                        <AuthButtons />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import MenuItem from './MenuItem.vue'
import LanguagePicker from './LanguagePicker.vue'
import AuthButtons from './AuthButtons.vue'
import '@/assets/images/Logo_GGC.png'

export default Vue.extend({
  name: 'Header',
  components: {
    MenuItem,
    LanguagePicker,
    AuthButtons
  },
  data () {
    return {
      isMenuOpen: false as boolean
    }
  },
  methods: {
    toggleMenu (): void {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
})
</script>

<style lang="css" scoped>
header {
  z-index: 999;
  position: fixed;
  top: -0.1rem;
  left: 0;
  right: 0;
  width: 100%;
  height: 8rem;
  -webkit-box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16);
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16);
}

header .container {
  height: 100%;
}

header .container .content {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}

header .container .content .logo img {
  margin-bottom: -0.5rem;
}

header .container .content .menu-items {
  text-align: center;
}

header .container .content .menu-items a {
  position: relative;
  color: #212a25;
}

header .container .content .menu-items a:hover {
  color: #05a66b;
}

header .container .content .menu-items a:not(:last-of-type) {
  margin-right: 3rem;
}

header .container .content .menu-items a.active:hover {
  color: #212a25;
}

header .container .content .menu-items a.active:after {
  content: "";
  position: absolute;
  bottom: -2.9rem;
  left: -1rem;
  width: calc(100% + 2rem);
  height: 0.4rem;
  background-color: #05a66b;
}

header .container .content .menu-items .btn-orange {
  font-size: 1.4rem;
}

header .container .content .menu-options .lang span {
  cursor: pointer;
}

header .container .content .menu-options .btn-register:hover {
  color: #05a66b;
}

header .container .content .toggle {
  cursor: pointer;
  display: none;
}

@media (max-width: 1199.98px) {
  header .container .content .toggle {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

header .container .content .toggle .menu-icon {
  position: absolute;
  right: 0;
}

header .container .content .toggle #times {
  opacity: 0;
}

header .container .content .menu-desktop {
  display: none;
  align-items: center;
}

header .menu-mobile {
  z-index: 999;
  position: absolute;
  display: block;
  height: calc(100vh - 7.6rem);
  top: 7.8rem;
  left: -0.1rem;
  right: -0.1rem;
  overflow: hidden;
}

header .menu-mobile.closed {
  height: 0;
}

header .menu-mobile .menu-items {
  height: 100%;
}

@media (min-width: 1200px) {
  header .container .content .menu-desktop {
    display: flex;
  }

  header .menu-mobile {
    display: none;
  }
}
</style>
