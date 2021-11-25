module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/alpha-shop-vue/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/scss/style.scss";',
      },
    },
  },
};
