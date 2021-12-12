<script>
/* eslint-disable */
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[0].id, idsdg: sdgs[0].sdgNumber, name: sdgs[0].name, description: 'description'}, query:{}}">
              <div
                class="
                  sdg sdg-one
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">1</div>
                <div>
                  <h3>geen armoede</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-one.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-one.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[1].id, idsdg: sdgs[1].sdgNumber ,name: sdgs[1].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-two
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">2</div>
                <div>
                  <h3>geen honger</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-two.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-two.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[2].id, idsdg: sdgs[2].sdgNumber, name: sdgs[2].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-three
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">3</div>
                <div>
                  <h3>goede gezondheid en welzijn</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-three.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-three.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[3].id, idsdg: sdgs[3].sdgNumber, name: sdgs[3].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-four
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">4</div>
                <div>
                  <h3>kwalitiets onderwijs</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-four.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-four.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[4].id, idsdg: sdgs[4].sdgNumber, name: sdgs[4].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-five
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">5</div>
                <div>
                  <h3>gendergelijkheid</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-five.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-five.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[5].id, idsdg: sdgs[5].sdgNumber, name: sdgs[5].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-six
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">6</div>
                <div>
                  <h3>geen armoude</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-six.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-six.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[6].id, idsdg: sdgs[6].sdgNumber, name: sdgs[6].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-seven
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">7</div>
                <div>
                  <h3>betaalbare en duurzame energie</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-seven.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-seven.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[7].id, idsdg: sdgs[7].sdgNumber, name: sdgs[7].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-eight
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">8</div>
                <div>
                  <h3>waardig werk en economische groei</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-eight.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-eight.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[8].id, idsdg: sdgs[8].sdgNumber, name: sdgs[8].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-nine
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">9</div>
                <div>
                  <h3>industrie, innovatie en infrastructuur</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-nine.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-nine.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG',params: { id:sdgs[9].id, idsdg: sdgs[9].sdgNumber, name: sdgs[9].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-ten
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">10</div>
                <div>
                  <h3>ongelijkheid verminderen</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-ten.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-ten.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[10].id, idsdg: sdgs[10].sdgNumber, name: sdgs[10].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-eleven
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">11</div>
                <div>
                  <h3>duurzame steden en gemeenschappen</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-eleven.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-eleven.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[11].id, idsdg: sdgs[11].sdgNumber, name: sdgs[11].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-twelve
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">12</div>
                <div>
                  <h3>verantwoorde comsumptie en productie</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-twelf.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-twelf.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[12].id, idsdg: sdgs[12].sdgNumber, name: sdgs[12].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-thirteen
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">13</div>
                <div>
                  <h3>klimaatactie</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-thirteen.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-thirteen.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[13].id, idsdg: sdgs[13].sdgNumber, name: sdgs[13].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-fourteen
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">14</div>
                <div>
                  <h3>leven in het water</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-fourteen.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-fourteen.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[14].id, idsdg: sdgs[14].sdgNumber, name: sdgs[14].name, description: 'description'}}">>
              <div
                class="
                  sdg sdg-fifteen
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">15</div>
                <div>
                  <h3>leven op het land</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-fifteen.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-fifteen.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[15].id, idsdg: sdgs[15].sdgNumber, name: sdgs[15].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-sixteen
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">16</div>
                <div>
                  <h3>vrede, justitie en sterke publieke diensten</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-sixteen.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-sixteen.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="mb-lg-40 mb-md-20 mb-60">
            <router-link class="sdg-wrapper" :to="{name:'SolutionPerSDG' ,params: { id:sdgs[16].id, idsdg: sdgs[16].sdgNumber, name: sdgs[16].name, description: 'description'}}">
              <div
                class="
                  sdg sdg-seventeen
                  flex flex-col
                  space-between
                  p-lg-20 p-30
                  margin-auto
                "
              >
                <div class="h3">17</div>
                <div>
                  <h3>partnerschap om doelstellingen te bereiken</h3>
                  <small> 5 oplossingen</small>
                </div>
                <img
                  class="sdg-icon ls-is-cached lazyloaded"
                  data-scr="../../assets/images/sdg/icon-sdg-seventeen.svg"
                  alt="SDGs"
                  src="../../assets/images/sdg/icon-sdg-seventeen.svg"
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  {{getSdgs}}
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  data: () => ({
    sdgs:[],
  }),

  mounted() {
    axios
    .get('http://localhost:5011/Sdgs')
    .then(r => {this.sdgs = r.data  })
  },

  methods: {

  },

  computed: {
    getSdgs: function () {
      return this.sdgs;
    },
  }
};
</script>


<style>
</style>
