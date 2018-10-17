import { defineFeature, loadFeature } from "jest-cucumber";
import Quasar from "quasar-framework";
import { mount, createLocalVue } from "@vue/test-utils";
import LogIn from "@/views/LogIn.vue";
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
    const EXPECTED_CREDENTIALS = { username: USERNAME, password: PASSWORD };

    given(/^I am a user with a web browser$/, () => {
      wrapper = mount(LogIn, { localVue });
    });

    when(/^I load the default Vue JS page$/, () => {
      
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
      expect(wrapper.find('div.q-btn-inner').length).toEqual(1);
      wrapper.find('button[type=submit]').trigger('click');
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

    then(/^the system sends the credentials$/, () => {
      expect(wrapper.emitted("submitLogin")).toBeDefined();
      expect(wrapper.emitted("submitLogin").length).toEqual(1);
      expect(wrapper.emitted("submitLogin")[0][0]).toEqual(EXPECTED_CREDENTIALS);     
    });
  });
});