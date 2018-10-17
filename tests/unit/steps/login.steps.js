import { defineFeature, loadFeature } from "jest-cucumber";
import Quasar from "quasar-framework";
import { mount } from "@vue/test-utils";
import LogIn from "@/views/LogIn.vue";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/fontawesome";

const feature = loadFeature("tests/unit/features/Login.feature");

defineFeature(feature, test => {

  test("Login page is correctly rendered", ({ given, when, then }) => {
    let wrapper;

    const USERNAME = 'someUsername';
    const PASSWORD = 'somePassword';
    const EXPECTED_CREDENTIALS = { username: USERNAME, password: PASSWORD };

    given(/^I am a user with a web browser$/, () => {
      wrapper = mount(LogIn);
    });

    when(/^I load the default Vue JS page$/, () => {
      
    });

    when(/^I input a username$/, () => {
      wrapper.find('input[type=text]').setValue(USERNAME);
    });

    when(/^I input a password$/, () => {
      wrapper.find('input[type=password]').setValue(PASSWORD);
    });

    when(/^I click the SignIn button$/, () => {
      wrapper.find('button.q-btn').trigger('click');
    });

    then(/^I expect the username value to be set correctly$/, () => {
        expect(wrapper.vm.$data).toBeDefined();
        expect(wrapper.vm.$data.username).toBeDefined();
        expect(wrapper.vm.$data.username).toBe(USERNAME);
    });

    then(/^I expect the password value to be set correctly$/, () => {
        expect(wrapper.vm.$data.password).toBe(PASSWORD);
    });

    then(/^the system sends the credentials$/, () => {
      expect(wrapper.emitted('submitted')).toBeDefined();
      expect(wrapper.emitted('submitted').length).toEqual(1);
      expect(wrapper.emitted('submitted')[0][0]).toEqual(EXPECTED_CREDENTIALS);     
    });
  });
});