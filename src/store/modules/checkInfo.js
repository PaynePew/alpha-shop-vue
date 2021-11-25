import { LOAD_LOCAL, SAVE_LOCAL, UPDATE_INFO } from '../mutation-types';

export default {
  state: {
    info: {
      name: '',
      title: '',
      phone: '',
      email: '',
      state: '',
      address: '',
      shippingType: '',
      cardHolder: '',
      cardNumber: '',
      expired: '',
      valid: '',
    },
  },
  mutations: {
    [UPDATE_INFO]: (state, payload) => (state.info = {
      ...state.info,
      ...payload,
    }),
    [SAVE_LOCAL]: (state) => {
      localStorage.setItem('checkInfo', JSON.stringify(state.info));
    },
    [LOAD_LOCAL]: (state) => {
      if (localStorage.getItem('checkInfo')) {
        state.info = { ...state.info, ...JSON.parse(localStorage.getItem('checkInfo')) };
      }
    },
  },
  actions: {
    [UPDATE_INFO]: ({ commit }, payload) => commit(UPDATE_INFO, payload),
    [SAVE_LOCAL]: ({ commit }) => commit(SAVE_LOCAL),
    [LOAD_LOCAL]: ({ commit }) => commit(LOAD_LOCAL),
  },
  getters: {},
};
