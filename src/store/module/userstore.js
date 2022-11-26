import { SET_USERS_LIST } from "@/store/mutation-types";
import axios from 'axios';

const state = {
  usersList:[],
  resetClear:false
};

const getters = {
  getUsersList: (state) => state.usersList,
  getResetClear:(state)=>state.resetClear
};

const mutations = {
  [SET_USERS_LIST](state, payload) {
    state.usersList = payload;
  },
};

const actions = {
    async FETCH_USERS_LIST({ commit}) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        commit('SET_USERS_LIST', response.data);
     },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
