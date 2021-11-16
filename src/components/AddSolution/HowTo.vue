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

          <form
            id="add-content"
            method="POST"
            enctype="multipart/form-data"
            action=""
          >
            <input
              id="action"
              type="hidden"
              name="action"
              value="add-content"
            />
            <input type="hidden" name="id" value="164" />
            <input type="hidden" name="type" value="1" />

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
                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">1.</span>
                          <span>Geen armoede</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="1"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">2.</span>
                          <span>Geen honger</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="2"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">3.</span>
                          <span>Goede gezondheid en welzijn</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="3"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">4.</span>
                          <span>Kwaliteits onderwijs</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="4"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">5.</span>
                          <span>Gendergelijkheid</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="5"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">6.</span>
                          <span>Schoon water en sanitair</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="6"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-12 pb-10">
                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">7.</span>
                          <span>Betaalbare en duurzame energie</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="7"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">8.</span>
                          <span>Waardig werk en economische groei</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="8"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">9.</span>
                          <span>Industrie, innovatie en infrastructuur</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="9"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">10.</span>
                          <span>Ongelijkheid verminderen</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="10"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">11.</span>
                          <span>Duurzame steden en gemeenschappen</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="11"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">12.</span>
                          <span>Verantwoorde consumptie en productie</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="12"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-12 pb-10">
                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">13.</span>
                          <span>Klimaatactie</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="13"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">14.</span>
                          <span>Leven in het water</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="14"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">15.</span>
                          <span>Leven op het land</span>
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="15"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">16.</span>
                          <span
                            >Vrede, justitie en sterke publieke diensten</span
                          >
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="16"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>

                    <div class="flex flex-row pb-10" style="min-height: 4rem">
                      <label class="checkbox-wrapper">
                        <div class="flex">
                          <span class="mr-10">17.</span>
                          <span
                            >Partnerschap om doelstellingen te bereiken</span
                          >
                        </div>

                        <input
                          type="checkbox"
                          class="sdg-checkbox"
                          name="sdgs[]"
                          value="17"
                        />
                        <span class="checkbox"></span>
                      </label>
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

                    <span class="delete-img link display-none" data-id="164"
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
                <p class="bold-text mb-20">
                  Hier kan de inhoud ingevoerd worden
                </p>

                <textarea
                  id="input-content"
                  class="textarea input input-content full-width mt-20 p-20"
                  name="content"
                  style="display: none"
                ></textarea>
                <div
                  class="ck ck-reset ck-editor ck-rounded-corners"
                  role="application"
                  dir="ltr"
                  lang="en"
                  aria-labelledby="ck-editor__label_ed09a97a1c9a124f010f181d900b436a7"
                >
                  <label
                    class="ck ck-label ck-voice-label"
                    id="ck-editor__label_ed09a97a1c9a124f010f181d900b436a7"
                    >Tekstbewerker</label
                  >
                  <div
                    class="ck ck-editor__top ck-reset_all"
                    role="presentation"
                  >
                    <div class="ck ck-sticky-panel">
                      <div
                        class="ck ck-sticky-panel__placeholder"
                        style="display: none"
                      ></div>
                      <div class="ck ck-sticky-panel__content">
                        <div
                          class="ck ck-toolbar ck-toolbar_grouping"
                          role="toolbar"
                          aria-label="Editor welkbalk"
                        >
                          <div class="ck ck-toolbar__items">
                            <div class="ck ck-dropdown ck-heading-dropdown">
                              <button
                                class="
                                  ck ck-button ck-off
                                  ck-button_with-text
                                  ck-dropdown__button
                                "
                                type="button"
                                tabindex="-1"
                                aria-labelledby="ck-editor__aria-label_e6d40a54bc9a0bef631b2e3a504842051"
                                aria-haspopup="true"
                              >
                                <span class="ck ck-tooltip ck-tooltip_s"
                                  ><span class="ck ck-tooltip__text"
                                    >Koppen</span
                                  ></span
                                ><span
                                  class="ck ck-button__label"
                                  id="ck-editor__aria-label_e6d40a54bc9a0bef631b2e3a504842051"
                                  >Paragraaf</span
                                ><svg
                                  class="ck ck-icon ck-dropdown__arrow"
                                  viewBox="0 0 10 10"
                                >
                                  <path
                                    d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"
                                  ></path>
                                </svg>
                              </button>
                              <div
                                class="
                                  ck ck-reset
                                  ck-dropdown__panel ck-dropdown__panel_se
                                "
                              >
                                <ul class="ck ck-reset ck-list">
                                  <li class="ck ck-list__item">
                                    <button
                                      class="
                                        ck ck-button
                                        ck-heading_paragraph
                                        ck-on
                                        ck-button_with-text
                                      "
                                      type="button"
                                      tabindex="-1"
                                      aria-labelledby="ck-editor__aria-label_ed5db5fd93341c15967c74033ec7db19c"
                                    >
                                      <span
                                        class="
                                          ck ck-tooltip ck-tooltip_s
                                          ck-hidden
                                        "
                                        ><span
                                          class="ck ck-tooltip__text"
                                        ></span></span
                                      ><span
                                        class="ck ck-button__label"
                                        id="ck-editor__aria-label_ed5db5fd93341c15967c74033ec7db19c"
                                        >Paragraaf</span
                                      >
                                    </button>
                                  </li>
                                  <li class="ck ck-list__item">
                                    <button
                                      class="
                                        ck ck-button
                                        ck-heading_heading3
                                        ck-off
                                        ck-button_with-text
                                      "
                                      type="button"
                                      tabindex="-1"
                                      aria-labelledby="ck-editor__aria-label_e506be3af96ed3c2d1de1790c03c102c4"
                                    >
                                      <span
                                        class="
                                          ck ck-tooltip ck-tooltip_s
                                          ck-hidden
                                        "
                                        ><span
                                          class="ck ck-tooltip__text"
                                        ></span></span
                                      ><span
                                        class="ck ck-button__label"
                                        id="ck-editor__aria-label_e506be3af96ed3c2d1de1790c03c102c4"
                                        >Heading</span
                                      >
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <span class="ck ck-toolbar__separator"></span
                            ><button
                              class="ck ck-button ck-off"
                              type="button"
                              tabindex="-1"
                              aria-labelledby="ck-editor__aria-label_ea86d718719e5b891eb8e7163f63cc489"
                              aria-pressed="false"
                            >
                              <svg
                                class="ck ck-icon ck-button__icon"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"
                                ></path></svg
                              ><span class="ck ck-tooltip ck-tooltip_s"
                                ><span class="ck ck-tooltip__text"
                                  >Vet (CTRL+B)</span
                                ></span
                              ><span
                                class="ck ck-button__label"
                                id="ck-editor__aria-label_ea86d718719e5b891eb8e7163f63cc489"
                                >Vet</span
                              ></button
                            ><button
                              class="ck ck-button ck-off"
                              type="button"
                              tabindex="-1"
                              aria-labelledby="ck-editor__aria-label_e488afc336bb04491f373525b85b2ad88"
                              aria-pressed="false"
                            >
                              <svg
                                class="ck ck-icon ck-button__icon"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"
                                ></path></svg
                              ><span class="ck ck-tooltip ck-tooltip_s"
                                ><span class="ck ck-tooltip__text"
                                  >Cursief (CTRL+I)</span
                                ></span
                              ><span
                                class="ck ck-button__label"
                                id="ck-editor__aria-label_e488afc336bb04491f373525b85b2ad88"
                                >Cursief</span
                              ></button
                            ><button
                              class="ck ck-button ck-off"
                              type="button"
                              tabindex="-1"
                              aria-labelledby="ck-editor__aria-label_e5fa45719e61b7bf5bd2fff328e79d200"
                              aria-pressed="false"
                            >
                              <svg
                                class="ck ck-icon ck-button__icon"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"
                                ></path></svg
                              ><span class="ck ck-tooltip ck-tooltip_s"
                                ><span class="ck ck-tooltip__text"
                                  >Onderlijnen (CTRL+U)</span
                                ></span
                              ><span
                                class="ck ck-button__label"
                                id="ck-editor__aria-label_e5fa45719e61b7bf5bd2fff328e79d200"
                                >Onderlijnen</span
                              ></button
                            ><button
                              class="ck ck-button ck-off"
                              type="button"
                              tabindex="-1"
                              aria-labelledby="ck-editor__aria-label_e64af8c67c654230d6960165edac12cbe"
                              aria-pressed="false"
                            >
                              <svg
                                class="ck ck-icon ck-button__icon"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M7 16.4c-.8-.4-1.5-.9-2.2-1.5a.6.6 0 0 1-.2-.5l.3-.6h1c1 1.2 2.1 1.7 3.7 1.7 1 0 1.8-.3 2.3-.6.6-.4.6-1.2.6-1.3.2-1.2-.9-2.1-.9-2.1h2.1c.3.7.4 1.2.4 1.7v.8l-.6 1.2c-.6.8-1.1 1-1.6 1.2a6 6 0 0 1-2.4.6c-1 0-1.8-.3-2.5-.6zM6.8 9L6 8.3c-.4-.5-.5-.8-.5-1.6 0-.7.1-1.3.5-1.8.4-.6 1-1 1.6-1.3a6.3 6.3 0 0 1 4.7 0 4 4 0 0 1 1.7 1l.3.7c0 .1.2.4-.2.7-.4.2-.9.1-1 0a3 3 0 0 0-1.2-1c-.4-.2-1-.3-2-.4-.7 0-1.4.2-2 .6-.8.6-1 .8-1 1.5 0 .8.5 1 1.2 1.5.6.4 1.1.7 1.9 1H6.8z"
                                ></path>
                                <path d="M3 10.5V9h14v1.5z"></path></svg
                              ><span class="ck ck-tooltip ck-tooltip_s"
                                ><span class="ck ck-tooltip__text"
                                  >Doorhalen (CTRL+SHIFT+X)</span
                                ></span
                              ><span
                                class="ck ck-button__label"
                                id="ck-editor__aria-label_e64af8c67c654230d6960165edac12cbe"
                                >Doorhalen</span
                              ></button
                            ><button
                              class="ck ck-button ck-off"
                              type="button"
                              tabindex="-1"
                              aria-labelledby="ck-editor__aria-label_e06fbde83da4440df8d1c071a34bb075f"
                              aria-pressed="false"
                            >
                              <svg
                                class="ck ck-icon ck-button__icon"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"
                                ></path></svg
                              ><span class="ck ck-tooltip ck-tooltip_s"
                                ><span class="ck ck-tooltip__text"
                                  >Link (Ctrl+K)</span
                                ></span
                              ><span
                                class="ck ck-button__label"
                                id="ck-editor__aria-label_e06fbde83da4440df8d1c071a34bb075f"
                                >Link</span
                              ></button
                            ><span class="ck ck-toolbar__separator"></span
                            ><button
                              class="ck ck-button ck-off"
                              type="button"
                              tabindex="-1"
                              aria-labelledby="ck-editor__aria-label_e3e79fd3cb4bbc785ebf1e44cfc5656b7"
                            >
                              <svg
                                class="ck ck-icon ck-button__icon"
                                viewBox="0 0 20 20"
                              >
                                <path d="M2 9h16v2H2z"></path></svg
                              ><span class="ck ck-tooltip ck-tooltip_s"
                                ><span class="ck ck-tooltip__text"
                                  >Horizontale lijn</span
                                ></span
                              ><span
                                class="ck ck-button__label"
                                id="ck-editor__aria-label_e3e79fd3cb4bbc785ebf1e44cfc5656b7"
                                >Horizontale lijn</span
                              ></button
                            ><button
                              class="ck ck-button ck-off"
                              type="button"
                              tabindex="-1"
                              aria-labelledby="ck-editor__aria-label_eff7b44509dc458c5c540a0f7adac1564"
                              aria-pressed="false"
                            >
                              <svg
                                class="ck ck-icon ck-button__icon"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"
                                ></path></svg
                              ><span class="ck ck-tooltip ck-tooltip_s"
                                ><span class="ck ck-tooltip__text"
                                  >Ongenummerde lijst</span
                                ></span
                              ><span
                                class="ck ck-button__label"
                                id="ck-editor__aria-label_eff7b44509dc458c5c540a0f7adac1564"
                                >Ongenummerde lijst</span
                              ></button
                            ><button
                              class="ck ck-button ck-off"
                              type="button"
                              tabindex="-1"
                              aria-labelledby="ck-editor__aria-label_eada72fa643f7312f014c9d8988a7f062"
                              aria-pressed="false"
                            >
                              <svg
                                class="ck ck-icon ck-button__icon"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"
                                ></path></svg
                              ><span class="ck ck-tooltip ck-tooltip_s"
                                ><span class="ck ck-tooltip__text"
                                  >Genummerde lijst</span
                                ></span
                              ><span
                                class="ck ck-button__label"
                                id="ck-editor__aria-label_eada72fa643f7312f014c9d8988a7f062"
                                >Genummerde lijst</span
                              ></button
                            ><span class="ck ck-toolbar__separator"></span
                            ><button
                              class="ck ck-button ck-off"
                              type="button"
                              tabindex="-1"
                              aria-labelledby="ck-editor__aria-label_e1162731946c9ca4c96fff19e6b559e67"
                            >
                              <svg
                                class="ck ck-icon ck-button__icon"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95L5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"
                                ></path></svg
                              ><span class="ck ck-tooltip ck-tooltip_s"
                                ><span class="ck ck-tooltip__text"
                                  >Inspringen</span
                                ></span
                              ><span
                                class="ck ck-button__label"
                                id="ck-editor__aria-label_e1162731946c9ca4c96fff19e6b559e67"
                                >Inspringen</span
                              >
                            </button>
                          </div>
                          <span class="ck ck-toolbar__separator"></span>
                          <div
                            class="
                              ck ck-dropdown
                              ck-toolbar__grouped-dropdown
                              ck-toolbar-dropdown
                            "
                          >
                            <button
                              class="ck ck-button ck-off ck-dropdown__button"
                              type="button"
                              tabindex="-1"
                              aria-labelledby="ck-editor__aria-label_ee4e0fb960ac337c94d0971f9547c421a"
                              aria-haspopup="true"
                            >
                              <svg
                                class="ck ck-icon ck-button__icon"
                                viewBox="0 0 20 20"
                              >
                                <circle cx="9.5" cy="4.5" r="1.5"></circle>
                                <circle cx="9.5" cy="10.5" r="1.5"></circle>
                                <circle
                                  cx="9.5"
                                  cy="16.5"
                                  r="1.5"
                                ></circle></svg
                              ><span class="ck ck-tooltip ck-tooltip_s"
                                ><span class="ck ck-tooltip__text"
                                  >Meer items weergeven</span
                                ></span
                              ><span
                                class="ck ck-button__label"
                                id="ck-editor__aria-label_ee4e0fb960ac337c94d0971f9547c421a"
                                >Meer items weergeven</span
                              ><svg
                                class="ck ck-icon ck-dropdown__arrow"
                                viewBox="0 0 10 10"
                              >
                                <path
                                  d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"
                                ></path>
                              </svg>
                            </button>
                            <div
                              class="
                                ck ck-reset
                                ck-dropdown__panel ck-dropdown__panel_se
                              "
                            >
                              <div
                                class="ck ck-toolbar"
                                role="toolbar"
                                aria-label="Drop-down werkbalk"
                              >
                                <div class="ck ck-toolbar__items">
                                  <button
                                    class="ck ck-button ck-disabled ck-off"
                                    type="button"
                                    tabindex="-1"
                                    aria-labelledby="ck-editor__aria-label_e306bb3f59e788aa2aa972d823c5fd1be"
                                    aria-disabled="true"
                                  >
                                    <svg
                                      class="ck ck-icon ck-button__icon"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"
                                      ></path></svg
                                    ><span class="ck ck-tooltip ck-tooltip_s"
                                      ><span class="ck ck-tooltip__text"
                                        >Minder inspringen</span
                                      ></span
                                    ><span
                                      class="ck ck-button__label"
                                      id="ck-editor__aria-label_e306bb3f59e788aa2aa972d823c5fd1be"
                                      >Minder inspringen</span
                                    ></button
                                  ><span class="ck ck-toolbar__separator"></span
                                  ><button
                                    class="ck ck-button ck-off"
                                    type="button"
                                    tabindex="-1"
                                    aria-labelledby="ck-editor__aria-label_e267e61b0fbecb85f4406c3cd9e5d4d5d"
                                    aria-pressed="false"
                                  >
                                    <svg
                                      class="ck ck-icon ck-button__icon"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"
                                      ></path></svg
                                    ><span class="ck ck-tooltip ck-tooltip_s"
                                      ><span class="ck ck-tooltip__text"
                                        >Blok citaat</span
                                      ></span
                                    ><span
                                      class="ck ck-button__label"
                                      id="ck-editor__aria-label_e267e61b0fbecb85f4406c3cd9e5d4d5d"
                                      >Blok citaat</span
                                    >
                                  </button>
                                  <div class="ck ck-dropdown">
                                    <button
                                      class="
                                        ck ck-button ck-off
                                        ck-dropdown__button
                                      "
                                      type="button"
                                      tabindex="-1"
                                      aria-labelledby="ck-editor__aria-label_e42be2f44f8a26df209f7b83280deed80"
                                      aria-haspopup="true"
                                    >
                                      <svg
                                        class="ck ck-icon ck-button__icon"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"
                                        ></path></svg
                                      ><span class="ck ck-tooltip ck-tooltip_s"
                                        ><span class="ck ck-tooltip__text"
                                          >Tabel invoegen</span
                                        ></span
                                      ><span
                                        class="ck ck-button__label"
                                        id="ck-editor__aria-label_e42be2f44f8a26df209f7b83280deed80"
                                        >Tabel invoegen</span
                                      ><svg
                                        class="ck ck-icon ck-dropdown__arrow"
                                        viewBox="0 0 10 10"
                                      >
                                        <path
                                          d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"
                                        ></path>
                                      </svg>
                                    </button>
                                    <div
                                      class="
                                        ck ck-reset
                                        ck-dropdown__panel ck-dropdown__panel_se
                                      "
                                    ></div>
                                  </div>
                                  <div class="ck ck-dropdown">
                                    <div
                                      class="
                                        ck ck-splitbutton
                                        ck-dropdown__button
                                      "
                                    >
                                      <span
                                        class="
                                          ck-file-dialog-button ck ck-button
                                          ck-splitbutton__action
                                        "
                                        ><button
                                          class="ck ck-button ck-off"
                                          type="button"
                                          tabindex="-1"
                                          aria-labelledby="ck-editor__aria-label_e66c18b89cc25774ffa3bb73b8e4499c5"
                                        >
                                          <svg
                                            class="ck ck-icon ck-button__icon"
                                            viewBox="0 0 20 20"
                                          >
                                            <path
                                              d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"
                                            ></path></svg
                                          ><span
                                            class="ck ck-tooltip ck-tooltip_s"
                                            ><span class="ck ck-tooltip__text"
                                              >Afbeelding toevoegen</span
                                            ></span
                                          ><span
                                            class="ck ck-button__label"
                                            id="ck-editor__aria-label_e66c18b89cc25774ffa3bb73b8e4499c5"
                                            >Afbeelding toevoegen</span
                                          ></button
                                        ><input
                                          class="ck-hidden"
                                          type="file"
                                          tabindex="-1"
                                          accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/tiff"
                                          multiple="true" /></span
                                      ><button
                                        class="
                                          ck ck-button ck-off
                                          ck-splitbutton__arrow
                                        "
                                        type="button"
                                        tabindex="-1"
                                        aria-labelledby="ck-editor__aria-label_edf888e321acd831d06ed36aca77f0e62"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <svg
                                          class="ck ck-icon ck-button__icon"
                                          viewBox="0 0 10 10"
                                        >
                                          <path
                                            d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"
                                          ></path></svg
                                        ><span
                                          class="
                                            ck ck-tooltip ck-tooltip_s
                                            ck-hidden
                                          "
                                          ><span
                                            class="ck ck-tooltip__text"
                                          ></span></span
                                        ><span
                                          class="ck ck-button__label"
                                          id="ck-editor__aria-label_edf888e321acd831d06ed36aca77f0e62"
                                        ></span>
                                      </button>
                                    </div>
                                    <div
                                      class="
                                        ck ck-reset
                                        ck-dropdown__panel ck-dropdown__panel_se
                                        ck-image-insert__panel
                                      "
                                    ></div>
                                  </div>
                                  <span class="ck ck-toolbar__separator"></span
                                  ><button
                                    class="ck ck-button ck-disabled ck-off"
                                    type="button"
                                    tabindex="-1"
                                    aria-labelledby="ck-editor__aria-label_e2fd8a554fcf22e7ae7cf76ddd641754c"
                                    aria-disabled="true"
                                  >
                                    <svg
                                      class="ck ck-icon ck-button__icon"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"
                                      ></path></svg
                                    ><span class="ck ck-tooltip ck-tooltip_s"
                                      ><span class="ck ck-tooltip__text"
                                        >Ongedaan maken (CTRL+Z)</span
                                      ></span
                                    ><span
                                      class="ck ck-button__label"
                                      id="ck-editor__aria-label_e2fd8a554fcf22e7ae7cf76ddd641754c"
                                      >Ongedaan maken</span
                                    ></button
                                  ><button
                                    class="ck ck-button ck-disabled ck-off"
                                    type="button"
                                    tabindex="-1"
                                    aria-labelledby="ck-editor__aria-label_e790e9895759031f2c887e38347071fd2"
                                    aria-disabled="true"
                                  >
                                    <svg
                                      class="ck ck-icon ck-button__icon"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"
                                      ></path></svg
                                    ><span class="ck ck-tooltip ck-tooltip_s"
                                      ><span class="ck ck-tooltip__text"
                                        >Opnieuw (CTRL+Y)</span
                                      ></span
                                    ><span
                                      class="ck ck-button__label"
                                      id="ck-editor__aria-label_e790e9895759031f2c887e38347071fd2"
                                      >Opnieuw</span
                                    >
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ck ck-editor__main" role="presentation">
                    <div
                      class="
                        ck-blurred ck ck-content
                        ck-editor__editable
                        ck-rounded-corners
                        ck-editor__editable_inline
                      "
                      lang="en"
                      dir="ltr"
                      role="textbox"
                      aria-label="Tekstbewerker, 0%"
                      contenteditable="true"
                    >
                      <p
                        class="ck-placeholder"
                        data-placeholder="Inhoud van de creatie"
                      >
                        <br data-cke-filler="true" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex align-center space-between">
              <div class="flex align-center">
                <button class="add-textfield bold-text mr-50" type="submit">
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

              <p class="delete text-gray link" data-id="164">
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
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
