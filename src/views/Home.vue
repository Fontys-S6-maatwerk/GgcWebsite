<template>
  <div class="home">
    <div class="homepage">
      <div
        class="header-home background-white flex justify-center align-center py-lg-60 py-md-20 py-120"
      >
        <img
          class="circles circles-header-home-left ls-is-cached lazyloaded"
          :data-src="images.circles.default"
          alt
          :src="images.circles.default"
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

      <div class="page-content">
        <div class="home-content usp-row background-offwhite py-30 display-none-xs">
          <div class="container">
            <div class="content">
              <div class="row align-items-center">
                <div class="col-md-4">
                  <div class="flex align-items-center justify-content-center">
                    <i class="fas fa-people-carry fa-2x text-highlight mr-30"></i>
                    <span>Open source community</span>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="flex align-items-center justify-content-center">
                    <i class="fas fa-globe-europe fa-2x text-highlight mr-30"></i>
                    <span>Samen de wereld verbeteren</span>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="flex align-items-center justify-content-center">
                    <i class="fas fa-info fa-2x text-highlight mr-30"></i>
                    <span>Eén plek met informatie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="home-content background-white py-md-40 py-100 about-ggc">
          <div class="container">
            <div class="content">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <h2 class="mb-20">
                    About Global
                    <span class="text-highlight">Goals</span> Community
                  </h2>

                  <div class="text-justify">
                    <p>
                      We believe that every individual can contribute to
                      creating a better world for the next generations, we help
                      you connect with the people and knowledge you need to get
                      started today, for a better world tomorrow.
                    </p>
                    <p>
                      <br data-cke-filler="true" />
                    </p>
                    <p>
                      Anyone who is interested in making their life more
                      sustainable and has the resources to do so. Anyone who
                      wants to learn about the 17 SDGs and how to apply this
                      into their day to day life. Anyone who wants to co-create
                      and make the world a better place, for today, tomorrow and
                      the next generations! We want everyone to feel included,
                      from gender to skin colour to sexual orientation to
                      financial status. We kindly ask you to pay close attention
                      to these differences and take this with you on all
                      communication fronts.
                    </p>
                  </div>

                  <p class="mt-20 mb-md-20">
                    <router-link
                      to="/about-ggc/"
                      class="flex flex-end flex-start-md flex-end-lg align-center bold-text"
                    >
                      Read more about GGC
                      <i class="fas fa-angle-right ml-10"></i>
                    </router-link>
                  </p>
                </div>

                <div class="offset-lg-1 col-lg-5">
                  <img
                    class="ggc-image box-shadow border-radius lazyloaded"
                    :data-src="impressionDesign"
                    alt="Global Goals Community Ecodorp schetsen"
                    :src="images.impressionDesign"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="home-content background-offwhite py-md-40 py-100">
          <img
            class="circles circles-featured-home-right rotate-70 ls-is-cached lazyloaded"
            :data-src="images.circles.default"
            alt
            :src="images.circles.default"
          />

          <div class="container">
            <div class="content">
              <div class="row">
                <div class="col-xl-7">
                  <h2>Uitgelichte oplossingen</h2>

                  <div class="row mt-20">
                    <div class="col-md-10">
                      <p>
                        Om bepaalde praktische oplossingen ‘in het zonnetje te
                        zetten’ is deze sectie gemaakt. Sommige oplossingen
                        verdienen meer aandacht. Kijk eens of er een oplossing
                        tussen zit die misschien wel iets voor jou is!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mt-md-40 mt-60">
                <div class="col-xl-3 col-md-6">
                  <router-link
                    to="/creation/31/31-blog-belonging-to-the-future/"
                    class="card mb-lg-20"
                  >
                    <div
                      class="card-image position-relative callout lazyloaded"
                      data-bgset="/public/assets/content/header/31-header.jpg"
                      style="
                        background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/31-header.jpg');
                      "
                    >
                      <div
                        class="card-user-image position-absolute callout lazyloaded"
                        data-bgset="/public/assets/profile/44.jpg"
                        style="
                          background-image: url('https://globalgoalscommunity.eu/public/assets/profile/44.jpg');
                        "
                      >
                        <picture style="display: none">
                          <source
                            data-srcset="/public/assets/profile/44.jpg"
                            sizes="80px"
                            srcset="/public/assets/profile/44.jpg"
                          />
                          <img
                            alt
                            class="lazyautosizes lazyloaded"
                            data-sizes="auto"
                            data-parent-fit="cover"
                            sizes="80px"
                          />
                        </picture>
                      </div>
                      <picture style="display: none">
                        <source
                          data-srcset="/public/assets/content/header/31-header.jpg"
                          sizes="445px"
                          srcset="/public/assets/content/header/31-header.jpg"
                        />
                        <img
                          alt
                          class="lazyautosizes lazyloaded"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="445px"
                        />
                      </picture>
                    </div>

                    <div class="card-info">
                      <h4>Blog: Belonging to the future</h4>

                      <div class="date">
                        <i class="fas fa-globe-europe"></i>
                        Mon 7 December 2020 19:16 uur
                      </div>

                      <div class="content-short">shortDescription</div>

                      <div class="sdgs">
                        <span class="label sdg-eleven">11.</span>
                        <span class="label sdg-seventeen">17.</span>
                      </div>

                      <hr />

                      <div class="stats flex">
                        <div class="statistic statistic-liked">
                          <i class="fa fa-heart"></i>
                          1 likes
                        </div>

                        <div class="statistic statistic-viewed">
                          <i class="fa fa-eye"></i>
                          75 views
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
                <div class="col-xl-3 col-md-6">
                  <router-link
                    to="/creation/32/32-sociale-huurwoningen-als-woongemeenschap-opzetten/"
                    class="card mb-lg-20"
                  >
                    <div
                      class="card-image position-relative callout lazyloaded"
                      data-bgset="/public/assets/content/header/32-header.jpg"
                      style="
                        background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/32-header.jpg');
                      "
                    >
                      <div
                        class="card-user-image position-absolute callout lazyloaded"
                        data-bgset="/public/assets/profile/16.png"
                        style="
                          background-image: url('https://globalgoalscommunity.eu/public/assets/profile/16.png');
                        "
                      >
                        <picture style="display: none">
                          <source
                            data-srcset="/public/assets/profile/16.png"
                            sizes="80px"
                            srcset="/public/assets/profile/16.png"
                          />
                          <img
                            alt
                            class="lazyautosizes lazyloaded"
                            data-sizes="auto"
                            data-parent-fit="cover"
                            sizes="80px"
                          />
                        </picture>
                      </div>
                      <picture style="display: none">
                        <source
                          data-srcset="/public/assets/content/header/32-header.jpg"
                          sizes="445px"
                          srcset="/public/assets/content/header/32-header.jpg"
                        />
                        <img
                          alt
                          class="lazyautosizes lazyloaded"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="445px"
                        />
                      </picture>
                    </div>

                    <div class="card-info">
                      <h4>Sociale huurwoningen als woongemeenschap opzetten</h4>

                      <div class="date">
                        <i class="fas fa-globe-europe"></i>
                        Mon 7 December 2020 19:42 uur
                      </div>

                      <div class="content-short">
                        In Ecodorp Boekel gaan we duurzame woningen bouwen, voor
                        iedereen, ongeacht vermogen of hoogte salaris/uitkering.
                        De huren van de woningen die we gaan bouwen, blijven
                        onder de huursubsidiegrens, waardoor ze betaalbaar
                        blijven. De huren worden niet geïndex
                      </div>

                      <div class="sdgs">
                        <span class="label sdg-one">1.</span>
                        <span class="label sdg-eleven">11.</span>
                      </div>

                      <hr />

                      <div class="stats flex">
                        <div class="statistic statistic-liked">
                          <i class="fa fa-heart"></i>
                          1 likes
                        </div>

                        <div class="statistic statistic-viewed">
                          <i class="fa fa-eye"></i>
                          74 views
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
                <div class="col-xl-3 col-md-6">
                  <router-link to="/creation/33/33-blog-het-ggc/" class="card mb-lg-20">
                    <div
                      class="card-image position-relative callout lazyloaded"
                      data-bgset="/public/assets/content/header/33-header.png"
                      style="
                        background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/33-header.png');
                      "
                    >
                      <div
                        class="card-user-image position-absolute callout lazyloaded"
                        data-bgset="/public/assets/profile/27.jpg"
                        style="
                          background-image: url('https://globalgoalscommunity.eu/public/assets/profile/27.jpg');
                        "
                      >
                        <picture style="display: none">
                          <source
                            data-srcset="/public/assets/profile/27.jpg"
                            sizes="80px"
                            srcset="/public/assets/profile/27.jpg"
                          />
                          <img
                            alt
                            class="lazyautosizes lazyloaded"
                            data-sizes="auto"
                            data-parent-fit="cover"
                            sizes="80px"
                          />
                        </picture>
                      </div>
                      <picture style="display: none">
                        <source
                          data-srcset="/public/assets/content/header/33-header.png"
                          sizes="445px"
                          srcset="/public/assets/content/header/33-header.png"
                        />
                        <img
                          alt
                          class="lazyautosizes lazyloaded"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="445px"
                        />
                      </picture>
                    </div>

                    <div class="card-info">
                      <h4>Blog: Het GGC</h4>

                      <div class="date">
                        <i class="fas fa-globe-europe"></i>
                        Tue 8 December 2020 09:14 uur
                      </div>

                      <div class="content-short">
                        In deze blog wordt uitleg gegeven over het GGC, wat je
                        met het GGC kan en hoe het GGC is ontstaan. Benieuwd
                        geworden? Lees snel verder!
                      </div>

                      <div class="sdgs">
                        <span class="label sdg-eleven">11.</span>
                        <span class="label sdg-seventeen">17.</span>
                      </div>

                      <hr />

                      <div class="stats flex">
                        <div class="statistic statistic-liked">
                          <i class="fa fa-heart"></i>
                          1 likes
                        </div>

                        <div class="statistic statistic-viewed">
                          <i class="fa fa-eye"></i>
                          85 views
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home-content py-md-40 py-100">
        <div class="container quote">
          <div class="row no-gutters">
            <div class="col-md-5">
              <div
                class="quote-image border-radius-left background-position-center background-size-cover"
                :style="{backgroundImage: 'url('+images.profile.p21+')'}"
              ></div>
            </div>

            <div class="col-md-7">
              <div
                class="flex align-items-center border-radius-right background-offwhite full-height px-60 py-sm-40"
              >
                <div class="quote-text">
                  <h3 class="mb-20">
                    GGC heeft mij geholpen om duurzamer te gaan leven.
                    Verschillende oplossingen hebben mij daarbij geholpen,
                    super!
                  </h3>

                  <span>- Rick de Vries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home-content background-offwhite py-md-40 py-100">
        <img
          class="circles circles-populair-home-left lazyloaded"
          :data-src="images.circles.circles2x"
          alt
          :src="images.circles.circles2x"
        />
        <img
          class="circles circles-populair-home-right ls-is-cached lazyloaded"
          :data-src="images.circles.default"
          alt
          :src="images.circles.default"
        />

        <div class="container">
          <div class="content">
            <div class="row">
              <div class="col-md-7">
                <h2>Populaire oplossingen</h2>

                <div class="row mt-20">
                  <div class="col-lg-10">
                    <p>
                      Hieronder staan de populairste praktische oplossingen van
                      het platform. Deze zijn gebaseerd op het aantal weergaven.
                      Zijn deze oplossingen hun plek waard?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-md-40 mt-60">
              <div class="col-xl-3 col-md-6">
                <router-link
                  to="/creation/3/3-6-tips-voor-waterbesparing-in-de-tuin/"
                  class="card mb-lg-20"
                >
                  <div
                    class="card-image position-relative callout lazyloaded"
                    data-bgset="/public/assets/content/header/standard.jpg"
                    style="
                      background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/standard.jpg');
                    "
                  >
                    <div
                      class="card-user-image position-absolute callout lazyloaded"
                      data-bgset="/public/assets/profile/21.jpg"
                      style="
                        background-image: url('https://globalgoalscommunity.eu/public/assets/profile/21.jpg');
                      "
                    >
                      <picture style="display: none">
                        <source
                          data-srcset="/public/assets/profile/21.jpg"
                          sizes="80px"
                          srcset="/public/assets/profile/21.jpg"
                        />
                        <img
                          alt
                          class="lazyautosizes lazyloaded ls-is-cached"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="80px"
                        />
                      </picture>
                    </div>
                    <picture style="display: none">
                      <source
                        data-srcset="/public/assets/content/header/standard.jpg"
                        sizes="445px"
                        srcset="/public/assets/content/header/standard.jpg"
                      />
                      <img
                        alt
                        class="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="445px"
                      />
                    </picture>
                  </div>

                  <div class="card-info">
                    <h4>6 tips voor waterbesparing in de tuin</h4>

                    <div class="date">
                      <i class="fas fa-globe-europe"></i>
                      Wed 25 November 2020 14:03 uur
                    </div>

                    <div class="content-short">
                      In de zomer moet de tuin wel eens gesproeid worden met
                      water. De planten willen graag verkoeld worden zodat ze
                      het beter uithouden. Hier zijn 6 tips die helpen bij het
                      besparen van water.
                    </div>

                    <div class="sdgs">
                      <span class="label sdg-thirteen">13.</span>
                    </div>

                    <hr />

                    <div class="stats flex">
                      <div class="statistic statistic-liked">
                        <i class="fa fa-heart"></i>
                        4 likes
                      </div>

                      <div class="statistic statistic-viewed">
                        <i class="fa fa-eye"></i>
                        81 views
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-xl-3 col-md-6">
                <router-link to="/creation/1/1-kruidenspiraal/" class="card mb-lg-20">
                  <div
                    class="card-image position-relative callout lazyloaded"
                    data-bgset="/public/assets/content/header/1-header.png"
                    style="
                      background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/1-header.png');
                    "
                  >
                    <div
                      class="card-user-image position-absolute callout lazyloaded"
                      data-bgset="/public/assets/profile/27.jpg"
                      style="
                        background-image: url('https://globalgoalscommunity.eu/public/assets/profile/27.jpg');
                      "
                    >
                      <picture style="display: none">
                        <source
                          data-srcset="/public/assets/profile/27.jpg"
                          sizes="80px"
                          srcset="/public/assets/profile/27.jpg"
                        />
                        <img
                          alt
                          class="lazyautosizes lazyloaded ls-is-cached"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="80px"
                        />
                      </picture>
                    </div>
                    <picture style="display: none">
                      <source
                        data-srcset="/public/assets/content/header/1-header.png"
                        sizes="445px"
                        srcset="/public/assets/content/header/1-header.png"
                      />
                      <img
                        alt
                        class="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="445px"
                      />
                    </picture>
                  </div>

                  <div class="card-info">
                    <h4>Kruidenspiraal</h4>

                    <div class="date">
                      <i class="fas fa-globe-europe"></i>
                      Wed 25 November 2020 13:46 uur
                    </div>

                    <div class="content-short">
                      Met deze oplossing kweek je altijd je eigen verse kruiden
                      in je tuin, je hoeft geen plastic bakjes meer te kopen in
                      de supermarkt en draagt bij aan duurzame productie.
                    </div>

                    <div class="sdgs">
                      <span class="label sdg-two">2.</span>
                      <span class="label sdg-twelf">12.</span>
                    </div>

                    <hr />

                    <div class="stats flex">
                      <div class="statistic statistic-liked">
                        <i class="fa fa-heart"></i>
                        3 likes
                      </div>

                      <div class="statistic statistic-viewed">
                        <i class="fa fa-eye"></i>
                        67 views
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-xl-3 col-md-6">
                <router-link to="/creation/9/9-composteren-kun-je-leren/" class="card mb-lg-20">
                  <div
                    class="card-image position-relative callout lazyloaded"
                    data-bgset="/public/assets/content/header/9-header.jpg"
                    style="
                      background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/9-header.jpg');
                    "
                  >
                    <div
                      class="card-user-image position-absolute callout lazyloaded"
                      data-bgset="/public/assets/profile/28.jpg"
                      style="
                        background-image: url('https://globalgoalscommunity.eu/public/assets/profile/28.jpg');
                      "
                    >
                      <picture style="display: none">
                        <source
                          data-srcset="/public/assets/profile/28.jpg"
                          sizes="80px"
                          srcset="/public/assets/profile/28.jpg"
                        />
                        <img
                          alt
                          class="lazyautosizes lazyloaded"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="80px"
                        />
                      </picture>
                    </div>
                    <picture style="display: none">
                      <source
                        data-srcset="/public/assets/content/header/9-header.jpg"
                        sizes="445px"
                        srcset="/public/assets/content/header/9-header.jpg"
                      />
                      <img
                        alt
                        class="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="445px"
                      />
                    </picture>
                  </div>

                  <div class="card-info">
                    <h4>Composteren kun je leren</h4>

                    <div class="date">
                      <i class="fas fa-globe-europe"></i>
                      Tue 1 December 2020 10:29 uur
                    </div>

                    <div class="content-short">
                      Groente-, fruit- en tuinafval kun je in de gft-bak doen,
                      maar je kunt het ook zelf composteren. Ik heb het altijd
                      lastig gevonden hoe ik dit nu precies kan doen, maar heb
                      eindelijk de beste manier gevonden. Deze tips en tricks
                      deel ik graag met jullie!
                    </div>

                    <div class="sdgs">
                      <span class="label sdg-twelf">12.</span>
                      <span class="label sdg-fifteen">15.</span>
                    </div>

                    <hr />

                    <div class="stats flex">
                      <div class="statistic statistic-liked">
                        <i class="fa fa-heart"></i>
                        3 likes
                      </div>

                      <div class="statistic statistic-viewed">
                        <i class="fa fa-eye"></i>
                        58 views
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-xl-3 col-md-6">
                <router-link to="/creation/5/5-maak-je-tuin-koeler/" class="card mb-lg-20">
                  <div
                    class="card-image position-relative callout lazyloaded"
                    data-bgset="/public/assets/content/header/standard.jpg"
                    style="
                      background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/standard.jpg');
                    "
                  >
                    <div
                      class="card-user-image position-absolute callout lazyloaded"
                      data-bgset="/public/assets/profile/21.jpg"
                      style="
                        background-image: url('https://globalgoalscommunity.eu/public/assets/profile/21.jpg');
                      "
                    >
                      <picture style="display: none">
                        <source
                          data-srcset="/public/assets/profile/21.jpg"
                          sizes="80px"
                          srcset="/public/assets/profile/21.jpg"
                        />
                        <img
                          alt
                          class="lazyautosizes lazyloaded ls-is-cached"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="80px"
                        />
                      </picture>
                    </div>
                    <picture style="display: none">
                      <source
                        data-srcset="/public/assets/content/header/standard.jpg"
                        sizes="445px"
                        srcset="/public/assets/content/header/standard.jpg"
                      />
                      <img
                        alt
                        class="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="445px"
                      />
                    </picture>
                  </div>

                  <div class="card-info">
                    <h4>Maak je tuin koeler!</h4>

                    <div class="date">
                      <i class="fas fa-globe-europe"></i>
                      Wed 25 November 2020 14:06 uur
                    </div>

                    <div class="content-short">
                      Soms zijn tegels essentieel in je tuin, hoe kan je nu toch
                      je tuin koeler maken mét tegels?
                    </div>

                    <div class="sdgs">
                      <span class="label sdg-thirteen">13.</span>
                    </div>

                    <hr />

                    <div class="stats flex">
                      <div class="statistic statistic-liked">
                        <i class="fa fa-heart"></i>
                        2 likes
                      </div>

                      <div class="statistic statistic-viewed">
                        <i class="fa fa-eye"></i>
                        74 views
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home-content background-offwhite my-md-40 my-100 py-60 display-none-md">
        <div class="container partners">
          <div class="flex space-between align-items-center">
            <div class="left">
              <strong>Partners van</strong>

              <div
                class="image-ggc background-size-contain background-no-repeat mt-15"
                style="background-image: url('/public/assets/Logo_GGC.png')"
              ></div>
            </div>

            <div class="right flex">
              <router-link to="https://www.ecodorpennetwerk.nl/" target="_blank" class="ml-15">
                <div
                  class="logo-partner background-position-center background-size-contain background-no-repeat"
                  style="
                    background-image: url('/public/assets/partners/gen_nederland.png');
                  "
                ></div>
              </router-link>
              <router-link to="https://www.ecodorpboekel.nl/" target="_blank" class="ml-15">
                <div
                  class="logo-partner background-position-center background-size-contain background-no-repeat"
                  style="
                    background-image: url('/public/assets/partners/ecodorp_boekel.png');
                  "
                ></div>
              </router-link>
              <router-link
                to="https://fontys.nl/Over-Fontys/Fontys-Hogeschool-ICT.htm"
                target="_blank"
                class="ml-15"
              >
                <div
                  class="logo-partner background-position-center background-size-contain background-no-repeat"
                  style="
                    background-image: url('/public/assets/partners/fontys_hogeschool_ict.png');
                  "
                ></div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="home-content background-offwhite py-md-40 py-100">
        <img class="circles circles-recent-home-left" :src="images.circles.default" />
        <img
          class="circles circles-recent-home-right rotate-80"
          :src="images.circles.default"
        />

        <div class="container">
          <div class="content">
            <div class="row">
              <div class="col-md-7">
                <h2>Nieuwste oplossingen</h2>

                <div class="row mt-20">
                  <div class="col-lg-10">
                    Hier staan de nieuwste praktische oplossingen die op GGC
                    zijn geplaatst
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-md-40 mt-60">
              <div class="col-xl-3 col-md-6">
                <router-link
                  to="/creation/96/96-how-to-help-the-bumblebee-to-hibernate-in-your-garden/"
                  class="card mb-lg-20"
                >
                  <div
                    class="card-image position-relative callout lazyloaded"
                    data-bgset="public/assets/content/header/96-header.png"
                    style="
                      background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/96-header.png');
                    "
                  >
                    <div
                      class="card-user-image position-absolute callout lazyloaded"
                      data-bgset="/public/assets/profile/16.png"
                      style="
                        background-image: url('https://globalgoalscommunity.eu/public/assets/profile/16.png');
                      "
                    >
                      <picture style="display: none">
                        <source
                          data-srcset="/public/assets/profile/16.png"
                          sizes="80px"
                          srcset="/public/assets/profile/16.png"
                        />
                        <img
                          alt
                          class="lazyautosizes lazyloaded ls-is-cached"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="80px"
                        />
                      </picture>
                    </div>
                    <picture style="display: none">
                      <source
                        data-srcset="public/assets/content/header/96-header.png"
                        sizes="445px"
                        srcset="public/assets/content/header/96-header.png"
                      />
                      <img
                        alt
                        class="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="445px"
                      />
                    </picture>
                  </div>

                  <div class="card-info">
                    <h4>How to help the bumblebee to hibernate in your garden</h4>

                    <div class="date">
                      <i class="fas fa-globe-europe"></i>
                      Thu 15 April 2021 18:48 uur
                    </div>

                    <div class="content-short">
                      The bumblebee is one of the best pollinators. It is
                      important to help the bumblebee get through the winter.
                    </div>

                    <div class="sdgs">
                      <span class="label sdg-fifteen">15.</span>
                    </div>

                    <hr />

                    <div class="stats flex">
                      <div class="statistic statistic-liked">
                        <i class="fa fa-heart"></i>
                        1 likes
                      </div>

                      <div class="statistic statistic-viewed">
                        <i class="fa fa-eye"></i>
                        15 views
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-xl-3 col-md-6">
                <router-link
                  to="/creation/82/82-how-to-make-your-own-herb-spiral/"
                  class="card mb-lg-20"
                >
                  <div
                    class="card-image position-relative callout lazyloaded"
                    data-bgset="public/assets/content/header/82-header.png"
                    style="
                      background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/82-header.png');
                    "
                  >
                    <div
                      class="card-user-image position-absolute callout lazyloaded"
                      data-bgset="/public/assets/profile/16.png"
                      style="
                        background-image: url('https://globalgoalscommunity.eu/public/assets/profile/16.png');
                      "
                    >
                      <picture style="display: none">
                        <source
                          data-srcset="/public/assets/profile/16.png"
                          sizes="80px"
                          srcset="/public/assets/profile/16.png"
                        />
                        <img
                          alt
                          class="lazyautosizes lazyloaded ls-is-cached"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="80px"
                        />
                      </picture>
                    </div>
                    <picture style="display: none">
                      <source
                        data-srcset="public/assets/content/header/82-header.png"
                        sizes="445px"
                        srcset="public/assets/content/header/82-header.png"
                      />
                      <img
                        alt
                        class="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="445px"
                      />
                    </picture>
                  </div>

                  <div class="card-info">
                    <h4>How to make your own herb spiral</h4>

                    <div class="date">
                      <i class="fas fa-globe-europe"></i>
                      Fri 9 April 2021 11:27 uur
                    </div>

                    <div class="content-short">
                      In a herb spiral every herb is planted at its perfect
                      location, with the perfect exposure to sun and the perfect
                      humidity of the soil. That makes herbs stronger and more
                      resilient!
                    </div>

                    <div class="sdgs">
                      <span class="label sdg-two">2.</span>
                    </div>

                    <hr />

                    <div class="stats flex">
                      <div class="statistic statistic-liked">
                        <i class="fa fa-heart"></i>
                        0 likes
                      </div>

                      <div class="statistic statistic-viewed">
                        <i class="fa fa-eye"></i>
                        15 views
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-xl-3 col-md-6">
                <router-link to="/creation/81/81-how-to-make-a-herb-spiral/" class="card mb-lg-20">
                  <div
                    class="card-image position-relative callout lazyloaded"
                    data-bgset="public/assets/content/header/81-header.png"
                    style="
                      background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/81-header.png');
                    "
                  >
                    <div
                      class="card-user-image position-absolute callout lazyloaded"
                      data-bgset="/public/assets/profile/16.png"
                      style="
                        background-image: url('https://globalgoalscommunity.eu/public/assets/profile/16.png');
                      "
                    >
                      <picture style="display: none">
                        <source
                          data-srcset="/public/assets/profile/16.png"
                          sizes="80px"
                          srcset="/public/assets/profile/16.png"
                        />
                        <img
                          alt
                          class="lazyautosizes lazyloaded ls-is-cached"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="80px"
                        />
                      </picture>
                    </div>
                    <picture style="display: none">
                      <source
                        data-srcset="public/assets/content/header/81-header.png"
                        sizes="445px"
                        srcset="public/assets/content/header/81-header.png"
                      />
                      <img
                        alt
                        class="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="445px"
                      />
                    </picture>
                  </div>

                  <div class="card-info">
                    <h4>How to make a herb spiral</h4>

                    <div class="date">
                      <i class="fas fa-globe-europe"></i>
                      Fri 9 April 2021 10:49 uur
                    </div>

                    <div class="content-short">
                      A herb spiral is a place for all kinds of herbs, where
                      every herb is planted at the perfect spot. Because it's
                      basic needs (preferred exposure of sun light and soil
                      humidity) are met, the plants will grow larger and be more
                      resilient.
                    </div>

                    <div class="sdgs">
                      <span class="label sdg-two">2.</span>
                    </div>

                    <hr />

                    <div class="stats flex">
                      <div class="statistic statistic-liked">
                        <i class="fa fa-heart"></i>
                        0 likes
                      </div>

                      <div class="statistic statistic-viewed">
                        <i class="fa fa-eye"></i>
                        6 views
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-xl-3 col-md-6">
                <router-link to="/creation/69/69-lastig-lustrum/" class="card mb-lg-20">
                  <div
                    class="card-image position-relative callout lazyloaded"
                    data-bgset="public/assets/content/header/69-header.jpg"
                    style="
                      background-image: url('https://globalgoalscommunity.eu/public/assets/content/header/69-header.jpg');
                    "
                  >
                    <div
                      class="card-user-image position-absolute callout lazyloaded"
                      data-bgset="/public/assets/profile/44.jpg"
                      style="
                        background-image: url('https://globalgoalscommunity.eu/public/assets/profile/44.jpg');
                      "
                    >
                      <picture style="display: none">
                        <source
                          data-srcset="/public/assets/profile/44.jpg"
                          sizes="80px"
                          srcset="/public/assets/profile/44.jpg"
                        />
                        <img
                          alt
                          class="lazyautosizes lazyloaded ls-is-cached"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="80px"
                        />
                      </picture>
                    </div>
                    <picture style="display: none">
                      <source
                        data-srcset="public/assets/content/header/69-header.jpg"
                        sizes="445px"
                        srcset="public/assets/content/header/69-header.jpg"
                      />
                      <img
                        alt
                        class="lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="445px"
                      />
                    </picture>
                  </div>

                  <div class="card-info">
                    <h4>Lastig Lustrum</h4>

                    <div class="date">
                      <i class="fas fa-globe-europe"></i>
                      Wed 3 March 2021 09:02 uur
                    </div>

                    <div class="content-short">
                      Nog 1 jaar en het rapport van de Club van Rome bestaat 50
                      jaar....
                    </div>

                    <div class="sdgs">
                      <span class="label sdg-twelf">12.</span>
                      <span class="label sdg-thirteen">13.</span>
                    </div>

                    <hr />

                    <div class="stats flex">
                      <div class="statistic statistic-liked">
                        <i class="fa fa-heart"></i>
                        0 likes
                      </div>

                      <div class="statistic statistic-viewed">
                        <i class="fa fa-eye"></i>
                        14 views
                      </div>
                    </div>
                  </div>
                </router-link>
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
import communityGroupImage from '@/assets/images/community-group.png'
import profile15Image from '@/assets/images/profile/15.png'
import profile21Image from '@/assets/images/profile/21.jpg'
import profile22Image from '@/assets/images/profile/22.jpg'
import impressionDesignImage from '@/assets/images/impressie-def-ontwerp.jpg'
import circlesImage from '@/assets/images/circles/circles.png'
import circles2xImage from '@/assets/images/circles/circles-2x.png'
import circlesTransparentImage from '@/assets/images/circles/circles-transparent.png'

@Component({
  components: {},
  data: function () {
    return {
      images: {
        circles: {
          default: circlesImage,
          circles2x: circles2xImage,
          transparent: circlesTransparentImage
        },
        profile: {
          p15: profile15Image,
          p21: profile21Image,
          p22: profile22Image
        },
        communityGroup: communityGroupImage,
        impressionDesign: impressionDesignImage
      }
    }
  }
})
export default class Home extends Vue {}
</script>
