module.exports = {
  pluginOptions: {
    quasar: {
      theme: 'mat',
      importAll: true,
    },
  },

  devServer: {
    proxy: {
      '/api/v1': {
        //target: 'http://localhost:8080',
		target: 'http://human-review-backend-labs-dev.apps.domino.rht-labs.com',
        changeOrigin: true,
      },
    },
  },

  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/,
  ],
};
