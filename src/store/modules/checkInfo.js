import { LOAD_LOCAL_INFO, SAVE_LOCAL_INFO, UPDATE_INFO } from '../mutation-types';

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
    [SAVE_LOCAL_INFO]: (state) => {
      localStorage.setItem('checkInfo', JSON.stringify(state));
    },
    [LOAD_LOCAL_INFO]: (state) => {
      if (localStorage.getItem('checkInfo')) {
        state.info = { ...state.info, ...JSON.parse(localStorage.getItem('checkInfo')).info };
      }
    },
  },
  actions: {
    [UPDATE_INFO]: ({ commit }, payload) => commit(UPDATE_INFO, payload),
    [SAVE_LOCAL_INFO]: ({ commit }) => commit(SAVE_LOCAL_INFO),
    [LOAD_LOCAL_INFO]: ({ commit }) => commit(LOAD_LOCAL_INFO),
  },
  getters: {},
};
