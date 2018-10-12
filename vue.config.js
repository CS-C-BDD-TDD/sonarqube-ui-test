module.exports = {
  pluginOptions: {
    quasar: {
      theme: 'mat',
      importAll: true,
    },
  },

  devServer: {
    proxy: {
      '/api/v1/user': {
		    target: 'http://human-review-backend-labs-test.apps.domino.rht-labs.com',
        changeOrigin: true,
      },
    },
  },

  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/,
  ],
};
