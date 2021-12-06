<template>
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

        <a href="/logout/" class="menu-item flex align-center bold-text mr-30">
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
    <div class="success-page page-content background-offwhite">
      <div class="container py-md-40 py-150">
        <div class="content">
          <div class="flex flex-col align-center text-center">
            <div
              class="
                solution-image
                background-size-cover background-position-center
                mb-30
              "
              style="
                background-image: url('public/assets/content/header/standard-square.jpg');
              "
            >
              <img
                data-scr="../../assets/content/header/standard-square.jpg"
                alt="SDGs"
                src="../../assets/content/header/standard-square.jpg"
              />
            </div>

            <div class="your-solution bold-text position-relative mb-30">
              Jouw oplossing
              <div class="solution-arrow position-absolute">
                <svg
                  class="svg-inline--fa fa-share fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="share"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
                  ></path></svg
                ><!-- <i class="fas fa-share"></i> -->
              </div>
            </div>

            <p class="h3 mb-30">
              Goed bezig! Jouw oplossing is opgeslagen en is zichtbaar op GGC.
            </p>

            <p class="bold-text mb-15">Bedankt voor de bijdrage</p>

            <p class="mb-30">
              Laat anderen weten dat jij een oplossing hebt geplaatst op GGC.
            </p>

            <a
              href="https://globalgoalscommunity.eu/creation/175/175-test1/"
              id="share"
              class="btn btn-orange mb-15"
            >
              <svg
                class="svg-inline--fa fa-share fa-w-16 mr-15"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="share"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
                ></path></svg
              ><!-- <i class="fas fa-share mr-15"></i> -->
              Deel via Social Media
            </a>

            <a href="/" class="light-text"> Doorgaan naar GGC </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
/* eslint-disable */

export default {
  name: "AfterCreationPage",

  data: () => ({}),

  mounted() {},

  methods: {},

  computed: {},
};
</script>
