// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'load the page': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('h1', 'Cifrado')
  },
  'add Element to the table': function (browser) {
    browser
      .setValue('input[name=words]', 'ABCD')
      .setValue('div[name=code]', 2)
      .click('#btn')
      .pause(1000)
      .assert.containsText('table', 'ABCD')
      .end()
  }
}
