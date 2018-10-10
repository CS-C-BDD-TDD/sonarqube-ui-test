<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<template>
  <q-page class="flex flex-center bg-primary" >

    <div class="window-width row justify-center items-start">
        <q-card class="bg-white">
          <q-card-media>
            <img alt="Quasar logo" src="../assets/DHS-logo.jpg">
          </q-card-media>

          <!--q-card-separator/-->

          <q-card-title></q-card-title>
          <q-card-main>
            <form>
              <q-field>
                <q-input v-model="username" id="username" type="username" float-label="User ID" required></q-input>
              </q-field>
              <q-field>
                <q-input v-model="password"  id="password" type="password" float-label="Password"
                required
                :after="[
                  {
                    icon: 'warning',
                    error: true,
                    handler () {
                      // do something...
                    }
                  }
                ]"
                >
                </q-input>
              </q-field>
            </form>
          </q-card-main>

          <q-card-actions>
            <q-btn class="full-width" type="submit"
              color="primary" label="Sign In" @click="callRestService()"/>
          </q-card-actions>
        </q-card>
    </div>

  </q-page>
</template>

<style>
</style>

<script>
   function generateSuccessHTMLOutput(response) {
  return  '<h4>Result</h4>' + 
          '<h5>Status:</h5> ' + 
          '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
          '<h5>Headers:</h5>' + 
          '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
          '<h5>Data:</h5>' + 
          '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
}
function generateErrorHTMLOutput(error) {
  return  '<h4>Result</h4>' + 
          '<h5>Message:</h5> ' + 
          '<pre>' + error.message + '</pre>' +
          '<h5>Status:</h5> ' + 
          '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
          '<h5>Headers:</h5>' + 
          '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
          '<h5>Data:</h5>' + 
          '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
}

  import {AXIOS} from 'axios';
  export default {
    name: 'LogIn', 
    data () {
//      username: "";
//      password: ""
    return {
      response: [],
      errors: [],
    };
  },
  methods:
  {
    callRestService() {
  const resultElement = document.getElementById('getResult1');
  const uname = document.getElementById('username').value;
  const pswd = document.getElementById('password').value;
  resultElement.innerHTML = '';
    AXIOS.put('http://localhost:8082/api/v1/user', {
    params: {
      username: uname,
      password: pswd,
    }} )
    .then(response => {
    console.log(response);
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(e => {
      console.log(e);
      resultElement.innerHTML = generateErrorHTMLOutput(response);
      this.errors.push(e);
      });
    },
   },

  };



  </script>
