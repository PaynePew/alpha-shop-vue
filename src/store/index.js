import { createStore } from 'vuex';
import cart from './modules/cart';
import checkInfo from './modules/checkInfo';

const store = createStore({
  modules: {
    cart,
    checkInfo,
  },
});

export default store;
