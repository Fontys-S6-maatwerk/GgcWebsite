<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import { bus } from '@/main'
import i18n from '@/i18n'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default {
  components: {
    Header,
    Footer
  },
  created () {
    bus.$on('set-language', (data) => {
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
