require("mocha-generators").install();
var Nightmare = require("nightmare");
var expect = require("chai").expect;

// Mocha
describe("Login to site", function() {
  var nightmare;

  // It runs before each test
  beforeEach(function*() {
    nightmare = Nightmare();

    // Login to the site first
    yield nightmare
      .goto("https://example.project/login")
      .type('form#login-form input[name="username"]', "test123")
      .type('form#login-form input[name="password"]', "testpass")
      .click('form#login-form input[type="submit"]');
  });

  it('Should see a title "Welcome back"', function(done) {
    nightmare
      .goto("https://example.project/")
      .evaluate(function() {
        return document.querySelector("h1").textContent;
      })
      .end()
      .then(function(title) {
        // Chai
        expect(title).to.equal("Welcome back");
        done();
      });
  });

  // It runs after each test
  afterEach(function*() {
    // End the Nightmare instance
    yield nightmare.end();
  });
});
