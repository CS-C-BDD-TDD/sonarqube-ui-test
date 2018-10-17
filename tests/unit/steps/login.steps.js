import { defineFeature, loadFeature } from "jest-cucumber";
import Quasar from "quasar-framework";
import { mount, createLocalVue } from "@vue/test-utils";
import Default from "@/layouts/Default.vue";
import router from "@/router.js";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/fontawesome";

const feature = loadFeature("tests/unit/features/Login.feature");

defineFeature(feature, test => {
    let localVue;

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
    let wrapper;

    const USERNAME = 'someUsername';
    const PASSWORD = 'somePassword';

    given('/^I am a user with a web browser$/', () => {
      wrapper = mount(Default, { localVue, router });
    });

    when('/^I load the default Vue JS page$/', () => {
      
    });

    when('/^I input a username$/', () => {
      wrapper.find('input[type=text]').setValue(USERNAME);
    });

    when('/^I input a password$/', () => {
      wrapper.find('input[type=password]').setValue(PASSWORD);
    });

    then('/^I expect the username value to be set correctly$/', () => {
        expect(wrapper.find('input[type=text]').getValue()).toBe(USERNAME);
    });

    then('/^I expect the password value to be set correctly$/', () => {
        expect(wrapper.find('input[type=password]').getValue()).toBe(PASSWORD);
    });
  });
});