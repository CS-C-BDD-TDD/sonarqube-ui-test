<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >

        <q-toolbar-title>
          YellowDog
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>  
      <q-page class="flex flex-center bg-primary" >
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {DefaultApi, AuthCredentials} from 'human_review_api_client';


export default {
  name: 'LayoutDefault',
  data() {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop,
      clientApi: {},
      token: '',
   
    };
  },
  mounted: function() {
    this.clientApi = new DefaultApi("http://human-review-backend-labs-dev.apps.domino.rht-labs.com/api/v1");
  },
  methods: {
    login: function(credentials) {


    }
  }
};
</script>

<style scoped="true" lang="less">
</style>
