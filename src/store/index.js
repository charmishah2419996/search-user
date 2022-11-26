import Vue from "vue";
import Vuex from "vuex";

import userstore from "./module/userstore";


Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    userstore
  },
});
