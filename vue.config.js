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
		target: 'http://10.130.0.203:8080',
        changeOrigin: true,
      },
    },
  },

  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/,
  ],
};
