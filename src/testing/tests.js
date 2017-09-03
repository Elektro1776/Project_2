require("mocha-generators").install();
const Nightmare = require("nightmare");
const expect = require("chai").expect;

describe("Test Login", function() {
  it("Should be able to auth a user", function*(done) {
    this.timeout(12000);
    var nightmare = Nightmare({ show: true });
    yield nightmare
      .goto("http://www.utiledevs.com")
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
          "http://ec2-34-212-47-239.us-west-2.compute.amazonaws.com/"
        );
      });
  });
});
