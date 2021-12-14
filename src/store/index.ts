import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Auth from './modules/auth.module'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    SDGs: [],
  },

  getters: {
    SDGs(state) {
      return state.SDGs
    },
  },

  mutations: {
    updateSDGs(state, _SDGs) {
      state.SDGs = _SDGs
    },
  },

  actions: {
    fetchSDGs(context) {
      return axios
        .get("http://localhost:5011/sdgs")
        .then((response) => {
          context.commit("updateSDGs", response.data)
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    createArticle(context, solutionModel) {
      return axios
        .post("http://localhost:5011/Solutions/article", solutionModel)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  modules: {
    Auth
  }
})
