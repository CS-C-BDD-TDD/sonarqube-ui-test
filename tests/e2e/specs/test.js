// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('input[type=text].col.q-input-target.q-no-input-spinner.ellipsis')
      .assert.elementPresent('input[type=password].col.q-input-target.q-no-input-spinner.ellipsis')
      .assert.containsText('div.q-toolbar-title', 'YellowDog')
      .end();
  },
  'As a user, I need to be able to enter a username into the username field': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type=text].col.q-input-target.q-no-input-spinner.ellipsis', 'dphillips')
      .assert.value('input[type=text].col.q-input-target.q-no-input-spinner.ellipsis', 'dphillips')
      .end();
  },
  'As a user, I need to be able to enter a password into the password field': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .setValue('input[type=password].col.q-input-target.q-no-input-spinner.ellipsis', 'pass1234')
      .assert.value('input[type=password].col.q-input-target.q-no-input-spinner.ellipsis', 'pass1234')
      .end();
  }
};
