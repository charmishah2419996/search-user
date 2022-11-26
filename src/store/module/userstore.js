import { SET_USERS_LIST } from "@/store/mutation-types";
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

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
