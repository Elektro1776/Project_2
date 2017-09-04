require("mocha-generators").install();
const Nightmare = require("nightmare");
const expect = require("chai").expect;

describe("Test Login", function() {
  it("Should be able to auth a user", function*(done) {
    this.timeout(120000);
    var nightmare = Nightmare({ show: true });
    yield nightmare
      .goto("http://localhost:3000/")
      .click('a[href="/auth/github"')
      .type('input[id="login_field"]', "utile.testing@gmail.com")
      .type('input[id="password"]', "thisisfortestinggithub")
      .click('input[value="Sign in"]')
      .wait("div.jumbotron")
      .evaluate(function() {
        return document.location.href;
      })
      .end()
      .then(link => {
        expect(link).to.equal(
          "http://localhost:3000/login"
        );
      });
  });
});
