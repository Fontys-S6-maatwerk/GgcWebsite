<template>
  <div id="app">
    <Header />
    <main class="pt-80">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { bus } from '@/main'
import i18n from '@/i18n'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  created (): void {
    bus.$on('set-language', (data: string) => {
      i18n.locale = data
    })
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
