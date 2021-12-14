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
      style="display: block"
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
    <div class="page-content background-offwhite">
      <div class="container py-md-40 py-100">
        <div class="content">
          <small class="text-gray">Stap 2: Vul de informatie in</small>
          <h1 class="h3 mb-20">Maak je oplossing compleet!</h1>
          <div class="mb-50">
            <p>
              Hieronder kun je alle informatie invullen om je oplossing compleet
              te maken én te publiceren op Global Goals Community! Daarnaast kun
              je de oplossing ook opslaan en op een later tijdstip afmaken, let
              er wel op dat je maar één oplossing tegelijk kunt opslaan.
            </p>
          </div>
          <div class="input-card input-wrapper mb-50">
            <div
              class="
                input-card-title
                background-highlight
                border-radius-top
                text-white
                px-30
                py-15
              "
            >
              Creatie naam
            </div>

            <div
              class="
                input-card-content
                background-white
                border-radius-bottom
                p-30
              "
            >
              <span class="bold-text"> Hoe wil je de creatie noemen? </span>

              <input
                id="input-title"
                class="input p-15 full-width input-title mt-15"
                name="title"
                placeholder="Naam van de creatie"
                value=""
                required=""
                v-model="article.name"
              />
            </div>
          </div>

          <div class="input-card input-wrapper mb-50">
            <div
              class="
                input-card-title
                background-highlight
                border-radius-top
                text-white
                px-30
                py-15
              "
            >
              Weersextreem
            </div>

            <div
              class="
                input-card-content
                background-white
                border-radius-bottom
                p-30
              "
            >
              <span class="bold-text"> Welk weersextreem hoort hierbij? </span>

              <input
                id="input-title"
                class="input p-15 full-width input-title mt-15"
                name="title"
                placeholder="Weersextreem"
                value=""
                required=""
                v-model="article.weatherExtreme"
              />
            </div>
          </div>

          <div class="input-card input-wrapper mb-50">
            <div
              class="
                input-card-title
                background-highlight
                border-radius-top
                text-white
                px-30
                py-15
              "
            >
              Creatie beschrijving
            </div>

            <div
              class="
                input-card-content
                background-white
                border-radius-bottom
                p-30
              "
            >
              <span class="bold-text">
                Geef de creatie een korte beschrijving (max. 300)
              </span>

              <div class="shortDescription-wrapper flex flex-col">
                <textarea
                  id="input-short-description"
                  class="input mt-15 p-20 input-short-description"
                  name="shortDescription"
                  rows="4"
                  maxlength="300"
                  placeholder="Korte beschrijving van de creatie"
                  v-model="article.description"
                ></textarea>

                <p class="shortDescription-count-wrapper small-text">
                  (<span class="shortDescription-count">0</span> / 300)
                </p>
              </div>
            </div>
          </div>

          <div class="input-card input-wrapper mb-50">
            <div
              class="
                input-card-title
                background-highlight
                border-radius-top
                text-white
                px-30
                py-15
              "
            >
              SDG's
            </div>

            <div
              class="
                input-card-content
                background-white
                border-radius-bottom
                p-30
              "
            >
              <span class="bold-text">
                Welke SDG('s) sluit(en) aan bij deze creatie? (max. 2)
              </span>

              <div class="row mt-20">
                <div class="col-lg-4 col-12 pb-10">
                  <div v-for="SDG in getSDGs" :key="SDG.id">
                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">{{ SDG.sdgNumber }}</span>
                          <span>{{ SDG.name }}</span>

                          <input
                            type="checkbox"
                            class="sdg-checkbox"
                            v-model="article.SDGIds"
                            :value="SDG.id"
                          />
                          <span class="checkbox"></span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="input-card input-wrapper mb-50">
            <div
              class="
                input-card-title
                background-highlight
                border-radius-top
                text-white
                px-30
                py-15
              "
            >
              Header afbeelding
            </div>

            <div
              class="
                input-card-content
                background-white
                border-radius-bottom
                p-30
              "
            >
              <div class="flex">
                <div class="text-center mr-30">
                  <div class="content-img border-radius mb-5">
                    <img
                      class="preview-img border-radius display-none"
                      src="#"
                    />
                    <span class="preview-text small-text text-gray"
                      >Geen foto</span
                    >
                  </div>

                  <span class="delete-img link display-none" data-id="173"
                    >Delete</span
                  >
                </div>

                <div>
                  <p class="bold-text">
                    Welke foto wil je gebruiken om je creatie weer te geven?
                    (Niet verplicht)
                  </p>
                  <p class="small-text text-gray mb-20">
                    Geldige bestandstypen zijn: jpg, jpeg, png
                  </p>

                  <input
                    class="content-img-input inputfile mt-20"
                    id="header-image"
                    name="header-image"
                    accept=".jpg,.jpeg,.png"
                    type="file"
                  />

                  <label for="header-image" class="content-img-label">
                    <svg
                      class="svg-inline--fa fa-images fa-w-18 mr-10"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="images"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"
                      ></path></svg
                    ><!-- <i class="fas fa-images mr-10"></i> -->
                    <span class="output">Upload een afbeelding</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="input-card input-wrapper mb-50">
            <div
              class="
                input-card-title
                background-highlight
                border-radius-top
                text-white
                px-30
                py-15
              "
            >
              Inhoud van de creatie
            </div>

            <div
              class="
                input-card-content
                background-white
                border-radius-bottom
                p-30
              "
            >
              <p class="bold-text mb-20">Hier kan de inhoud ingevoerd worden</p>

              <textarea
                id="input-content"
                class="textarea input input-content full-width mt-20 p-20"
                name="content"
                style="display: none"
              ></textarea>
              <div id="app">
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="article.content"
                ></ckeditor>
              </div>
            </div>
          </div>

          <div class="flex align-center space-between">
            <div class="flex align-center">
              <button class="add-textfield bold-text mr-50" @click="create()">
                <svg
                  class="svg-inline--fa fa-upload fa-w-16 input-icon mr-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="upload"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path></svg
                ><!-- <i class="fas fa-upload input-icon mr-10"></i> -->
                Publiceer de creatie
              </button>

              <p class="save link">
                <svg
                  class="svg-inline--fa fa-save fa-w-14 input-icon mr-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="save"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"
                  ></path></svg
                ><!-- <i class="fas fa-save input-icon mr-10"></i> -->
                Later verdergaan
              </p>
            </div>

            <p class="delete text-gray link" data-id="173">
              <svg
                class="svg-inline--fa fa-trash-alt fa-w-14 mr-5"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="trash-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                ></path></svg
              ><!-- <i class="fas fa-trash-alt mr-5"></i> -->
              Verwijderen
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script src="../../../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js"></script>
<script src="../../../node_modules/@ckeditor/ckeditor5-vue2/dist/ckeditor.js"></script>

<script>
/* eslint-disable */
import CKEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

export default {
  name: "Article",
  components: {
    CKEditor,
  },

  data: () => ({
    urlPost: "http://localhost:5011/Solutions/article",
    urlGetSDGs: "http://localhost:5011/sdgs",
    nextStep: "AfterCreationPage",
    SDGs: [],
    editor: CKEditor,
    editorConfig: {
      toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "blockQuote",
      ],
    },
    article: {
      name: "",
      weatherExtreme: "",
      description: "",
      content: "",
      SDGIds: [],
    },
  }),

  mounted() {
    this.fetchSDGs();
  },

  methods: {
    create: function () {
      // axios
      //   .post(this.urlPost, this.article)
      //   .then((response) => {
      //     console.log(response.data);
      //     if (response.status == 201) {
      //       this.changeStep(this.nextStep);
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error.response);
      //   });
      this.$store.dispatch("createArticle", this.article) // if status = 201
      .then(this.changeStep(this.nextStep))
    },
    fetchSDGs: function () {
      this.$store.dispatch("fetchSDGs");
    },
    changeStep(component) {
      this.$emit("nextStep", component);
    },
  },

  computed: {
    getSDGs: function () {
      var SDGs = this.$store.getters.SDGs;
      return SDGs.sort((a, b) => (a.sdgNumber > b.sdgNumber ? 1 : -1));
    },
  },
};
</script>
