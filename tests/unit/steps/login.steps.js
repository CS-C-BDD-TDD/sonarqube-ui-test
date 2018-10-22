import Vue from 'vue';
import { defineFeature, loadFeature } from "jest-cucumber";
import Quasar from "quasar-framework";
import { mount, createLocalVue } from "@vue/test-utils";
import LogIn from "@/views/LogIn.vue";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/fontawesome";

Vue.config.silent = true;

const feature = loadFeature("tests/unit/features/Login.feature");

defineFeature(feature, test => {
  let localVue;
  let wrapper;

  /**
   * Initialize the Vue.js rendering engine with Quasar and font-awesome
   */
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Quasar, {
      config: {},
      iconSet: iconSet
    });

  });


  test("Login page is correctly rendered", ({ given, when, then }) => {
    const USERNAME = 'someUsername';
    const PASSWORD = 'somePassword';
    const EXPECTED_CREDENTIALS = { username: USERNAME, password: PASSWORD };

    given("an instance of the LogIn component", () => {
      wrapper = mount(LogIn, { localVue });
    });

    when(/^I input a username$/, () => {
      expect(wrapper.find('input[type=text]').element).toBeDefined();
      wrapper.find('input[type=text]').setValue(USERNAME);
    });

    when(/^I input a password$/, () => {
      expect(wrapper.find('input[type=password]').element).toBeDefined();
      wrapper.find('input[type=password]').setValue(PASSWORD);
    });

    when(/^I click the SignIn button$/, () => {
      // expect(wrapper.find('div.q-btn-inner').length).toEqual(1);
      wrapper.find('button.q-btn').trigger('click');
    });

    then(/^I expect the username value to be set correctly$/, () => {
        expect(wrapper.vm.$data).toBeDefined();
        expect(wrapper.vm.$data.username).toBeDefined();
        expect(wrapper.vm.$data.username).toBe(USERNAME);
    });

    then(/^I expect the password value to be set correctly$/, () => {
        expect(wrapper.vm.$data.password).toBeDefined();
        expect(wrapper.vm.$data.password).toBe(PASSWORD);
    });

/*     then(/^the system sends the credentials$/, () => {
      expect(wrapper.emitted("login")).toBeDefined();
      expect(wrapper.emitted("login").length).toEqual(1);
      expect(wrapper.emitted("login")[0][0]).toEqual(EXPECTED_CREDENTIALS);
    }); */
  });

  test('Logging in calls REST API client', ({given, when, then}) => {
    let $api = {};
    let $router = {};
    const USERNAME = 'User1';
    const PASSWORD = 'Pass1';
    const TOKEN = 'Random-0.7354678706053357';

    given(/^a mock instance of the API client$/, () => {
      $api.userPut = jest.fn((credentials, callback) => {
        expect(credentials.username).toEqual(USERNAME);
        expect(credentials.password).toEqual(PASSWORD);
        callback(null, TOKEN, {});
      })
    });

    given(/^a mock instance of the Vue router$/, ()=> {
      $router.push = jest.fn((pushOpts) => {
        expect(pushOpts.name).toEqual('humanreview');
        expect(pushOpts.params.token).toEqual(TOKEN);   
      })
    });

    given(/^an instance of the LogIn component$/, () => {
      wrapper = mount(LogIn, { localVue, mocks: { $api, $router } });
    });

    when(/^I enter a username$/, () => {
      wrapper.find('input[type=text]').setValue(USERNAME);
    });

    when(/^I enter a password$/, () => {
      wrapper.find('input[type=password]').setValue(PASSWORD);
    });

    when(/^I click the SignIn button$/, () => {
      wrapper.find('button.q-btn').trigger('click');
    });

    then(/^I expect the username value to be set correctly$/, () => {
        expect(wrapper.vm.$data.username).toBe(USERNAME);
    });

    then(/^I expect the password value to be set correctly$/, () => {
        expect(wrapper.vm.$data.password).toBe(PASSWORD);
    });

    then(/^I expect that the userAuth method on the API client is called$/, async () => {
      await wrapper.vm.$nextTick();
      expect($api.userPut).toHaveBeenCalled();
    });

    then(/^I expect that the Vue router has been called to navigate away from the Login$/, async () => {
      await wrapper.vm.$nextTick();
      expect($router.push).toHaveBeenCalled();
    });
  });
});