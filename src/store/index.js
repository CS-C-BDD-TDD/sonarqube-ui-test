import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: String,
  },

  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },

    updateToken(state, token) {
      state.token = token;
    },
  },

  actions: {
    getLoginToken({ commit }, input) {
      //   const urlPathVars = `/api/v1/user?username=${input.username}&password=${input.password}`;
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const authCredentials = {
          username: `${input.username}`,
          password: `${input.password}`,
        };
  
        axios.put('/api/v1/user', authCredentials, config).then(result => commit('updateToken', result.data))
          .catch(console.error);
      },
    }
});
