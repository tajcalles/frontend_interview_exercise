import API from '@/api';

const GET_ROUND_DATA = 'GET_ROUND_DATA';
const GET_ROUND_DATA_SUCCESS = 'GET_ROUND_DATA_SUCCESS';
const GET_ROUND_DATA_FAILED = 'GET_ROUND_DATA_FAILED';

const namespaced = true;

const state = {
  all: [],
  loading: false,
};

const getters = {

  roundData: (state) => {
    return state.all;
  },

  loading: (state) => {
    return state.loading;
  },
};

const actions = {
  async getRoundData({ commit }) {
    let response = {};

    commit(GET_ROUND_DATA);

    try {
      response = await API.roundDataStore.roundDataStore();
    } catch (err) {
      response = err;
    }

    return new Promise((resolve, reject) => {
      if (response?.status >= 400) {
        commit(GET_ROUND_DATA_FAILED);
        reject(response);
      } else {
        commit(GET_ROUND_DATA_SUCCESS, response);
        resolve(response);
      }
    });
  },
};

const mutations = {
  [GET_ROUND_DATA](state) {
    state.loading = true;
  },

  [GET_ROUND_DATA_SUCCESS](state, roundData) {
    state.all = roundData;
    state.loading = false;
  },

  [GET_ROUND_DATA_FAILED](state) {
    state.loading = false;
  },
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
