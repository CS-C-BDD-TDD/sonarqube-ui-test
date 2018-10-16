import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    token: String,
    pendingList: [{
      stix_id: String,
      field_name: String,
      field_value: String,
      date: Date,
      object_type: String,
      status: String,
      action: String,
    }],
  },

  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },

    updateToken(state, token) {
      state.token = token;
    },

    updateHRPending(state, pendingList) {
      console.log('stixid: ', pendingList[0]);
      state.pendingList = pendingList;
      console.log(state.pendingList);
    },
  },

  actions: {
    getLoginToken({ commit }, input) {
      //  const urlPathVars = `/api/v1/user?username=${input.username}&password=${input.password}`;
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

    getHRPending({ commit }) {
      const config = {
        headers: {
          Token: 'rnadom-value',
        },
      };
      axios.get('/api/v1/humanreview/pending', null, config)
        .then(result => commit('updateHRPending', result.data))
        .catch(console.error());
    },
  },
});
