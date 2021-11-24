import {
  ADD_AMOUNT, DOWN_AMOUNT, GET_PRODUCT, UPDATE_PRICE, UPDATE_SHIPPING,
} from '../mutation-types';
// Hardcoding DummyData
export default {
  state: {
    products: {
      1: {
        product: '破壞補丁修身牛仔褲',
        price: 3999,
        picture: 'item-1@2x.png',
        amount: 1,
      },
      2: {
        product: '刷色直筒牛仔褲',
        price: 1299,
        picture: 'item-2@2x.png',
        amount: 1,
      },
    },
    productList: [1, 2],
    shippingFee: 0,
    totalPrice: 0,
  },
  mutations: {
    [ADD_AMOUNT]: (state, id) => (state.products[id].amount += 1),
    [DOWN_AMOUNT]: (state, id) => (state.products[id].amount > 0
      ? (state.products[id].amount -= 1)
      : null),
    [UPDATE_SHIPPING]: (state, charge) => (state.shippingFee = charge),
    [UPDATE_PRICE]: (state, price) => state.totalPrice = price,
  },
  actions: {
    [ADD_AMOUNT]: ({ commit }, id) => commit(ADD_AMOUNT, id),
    [DOWN_AMOUNT]: ({ commit }, id) => commit(DOWN_AMOUNT, id),
    [UPDATE_SHIPPING]: ({ commit }, charge) => commit(UPDATE_SHIPPING, charge),
    [UPDATE_PRICE]: ({ commit }, price) => commit(UPDATE_PRICE, price),
  },
  getters: {
    [GET_PRODUCT]: (state) => state.productList.map((productId) => state.products[productId]),
  },
};
