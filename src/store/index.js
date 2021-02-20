import Vuex from "vuex";
import Vue from "vue";

import config from "./modules/config";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    config,
  },
});
