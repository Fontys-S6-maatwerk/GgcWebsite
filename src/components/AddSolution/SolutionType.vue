<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.15.2/dist/sweetalert2.all.min.js"></script>
<script src="/public/js/site.js?v=1636620444"></script>
<script src="/public/js/add-content.js"></script>

<template>
  <body class="add-content">
    <span id="warning-container"><i data-reactroot=""></i></span>

    <div
      class="
        cookie-notification
        background-white
        display-none
        border-radius
        box-shadow
        small-text
        position-fixed
        p-15
      "
    >
      <div>
        <svg
          class="svg-inline--fa fa-cookie fa-w-16 mt-10"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="cookie"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
          ></path></svg
        ><!-- <i class="fas fa-cookie mt-10"></i> -->
        <strong>Cookies</strong>
      </div>

      <div class="mt-10 text-field">
        Deze website gebruikt <a href="/cookie-consent/">cookies</a> zodat er
        gekeken kan worden naar het gebruik van de website.
      </div>

      <div class="flex mt-20">
        <span class="accept-cookies btn btn-primary btn-xs mr-20">
          Prima!
        </span>
      </div>
    </div>
    <main class="pt-80">
      <div
        class="
          back-to-top
          background-highlight
          text-white
          display-none
          border-radius
          box-shadow
          small-text
          transition
          position-fixed
          p-15
        "
        style="display: none"
      >
        <svg
          class="svg-inline--fa fa-arrow-up fa-w-14 icon"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-up"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path></svg
        ><!-- <i class="fas fa-arrow-up icon"></i> -->
      </div>
      <div class="profile-menu flex background-highlight">
        <div class="container flex align-center">
          <a
            href="/my-profile/"
            class="menu-item flex align-center bold-text mr-30"
          >
            <svg
              class="svg-inline--fa fa-user fa-w-14 mr-10"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              ></path></svg
            ><!-- <i class="fas fa-user mr-10"></i> -->
            <span class="text">Profiel aanpassen</span>
          </a>

          <a
            href="/my-content/"
            class="menu-item flex align-center bold-text mr-30"
          >
            <svg
              class="svg-inline--fa fa-book-reader fa-w-16 mr-10"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="book-reader"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"
              ></path></svg
            ><!-- <i class="fas fa-book-reader mr-10"></i> -->
            <span class="text">Mijn oplossingen</span>
          </a>

          <a
            href="/add-content/"
            class="menu-item flex align-center bold-text mr-30"
          >
            <svg
              class="svg-inline--fa fa-plus-square fa-w-14 mr-10"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="plus-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
              ></path></svg
            ><!-- <i class="fas fa-plus-square mr-10"></i> -->
            <span class="text">Oplossing toevoegen</span>
          </a>

          <a
            href="/logout/"
            class="menu-item flex align-center bold-text mr-30"
          >
            <svg
              class="svg-inline--fa fa-walking fa-w-10 mr-10"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="walking"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm94.5 149.1l-23.3-11.8-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9-36-.1-55.9 10.1-93.3 25.2-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9 15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3 17.1-4.3 27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7 17.2-68.7 5.5 16.5c5.3 16.1 16.7 29.4 31.7 37l23.3 11.8c15.6 7.9 34.6 1.5 42.5-14.3 7.7-15.7 1.4-35.1-14.3-43zM73.6 385.8c-3.2 8.1-8 15.4-14.2 21.5l-50 50.1c-12.5 12.5-12.5 32.8 0 45.3s32.7 12.5 45.2 0l59.4-59.4c6.1-6.1 10.9-13.4 14.2-21.5l13.5-33.8c-55.3-60.3-38.7-41.8-47.4-53.7l-20.7 51.5z"
              ></path></svg
            ><!-- <i class="fas fa-walking mr-10"></i> -->
            <span class="text">Uitloggen</span>
          </a>
        </div>
      </div>
      <div class="page-content background-offwhite">
        <div class="container py-md-40 py-150">
          <div class="content">
            <small class="text-gray">Stap 1: Kies het type</small>
            <h1 class="h3 mb-20">Wat voor type content wilt u toevoegen</h1>
            <div class="mb-50">
              <p>
                Er kan op maar liefst op 4 verschillende manieren content
                toegevoegd worden. Dit kan in de vorm van een artikel, how-to
                instructie, een video en een podcast. Klik op het soort creatie
                dat je wilt aanmaken en ga door naar stap 2. Succes!
              </p>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div v-on:click="changeStep(articleComponent)" class="content-type">
                  <svg
                    class="svg-inline--fa fa-book-open fa-w-18 icon-type mb-15"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="book-open"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
                    ></path></svg
                  ><!-- <i class="fas fa-book-open icon-type mb-15"></i> -->
                  <span class="bold-text">Artikel</span>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6">
                <div v-on:click="changeStep(howToComponent)" data-type="1" class="content-type">
                  <svg
                    class="svg-inline--fa fa-tools fa-w-16 icon-type mb-15"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="tools"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"
                    ></path></svg
                  ><!-- <i class="fas fa-tools icon-type mb-15"></i> -->
                  <span class="bold-text">How-to</span>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6">
                <div v-on:click="changeStep(videoComponent)" data-type="3" class="content-type">
                  <svg
                    class="svg-inline--fa fa-film fa-w-16 icon-type mb-15"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="film"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"
                    ></path></svg
                  ><!-- <i class="fas fa-film icon-type mb-15"></i> -->
                  <span class="bold-text">Video</span>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6">
                <div
                  v-on:click="changeStep(podcastComponent)"
                  data-type="4"
                  class="
                    content-type
                    full-width
                    flex flex-col
                    justify-center
                    align-items-center
                    mb-20
                  "
                >
                  <svg
                    class="svg-inline--fa fa-headphones fa-w-16 icon-type mb-15"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="headphones"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"
                    ></path></svg
                  ><!-- <i class="fas fa-headphones icon-type mb-15"></i> -->
                  <span class="bold-text">Podcast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <div id="wot-new-assistant-container"><div data-reactroot=""></div></div>
  </body>
</template>

<script>
/* eslint-disable */

export default {
  name: "SolutionType",

  data: () => ({
    articleComponent: "",
    howToComponent: "",
    videoComponent: "",
    podcastComponent: "",
  }),

  mounted() {
    this.articleComponent = "Article";
    this.howToComponent = "HowTo";
    this.videoComponent = "Video";
    this.podcastComponent = "Podcast";
  },

  methods: {
    changeStep(component) {
      this.$emit("nextStep", component);
      console.log(component)
    },
  },

  computed: {},
};
</script>
