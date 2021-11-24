import { UPDATE_INFO } from '../mutation-types';

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
    [UPDATE_INFO]: (state, payload) => (
      state.info = {
        ...state.info, ...payload,
      }
    ),
  },
  actions: {
    [UPDATE_INFO]: ({ commit }, payload) => commit(UPDATE_INFO, payload),
  },
  getters: {},
};
