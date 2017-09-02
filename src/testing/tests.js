require("mocha-generators").install();
const Nightmare = require("nightmare");
const expect = require("chai").expect;
//
// describe("Test Login", function() {
//   it("Should be able to auth a user", function*(done) {
//      this.timeout(12000);
//     var nightmare = Nightmare({ show: true });
//      yield nightmare
//       .goto("http://localhost:3000")
//       .click('a[href="/auth/github"')
//       .type('input[id="login_field"]', "utile.testing@gmail.com")
//       .type('input[id="password"]', "thisisfortestinggithub")
//       .click('input[value="Sign in"]')
//       .wait("div.jumbotron")
//       .evaluate(function() {
//         document.location.href;
//       })
//       .end()
//       .then((link) => {
//         console.log(' WHAT I THE RESULT', result);
//         expect(link).to.equal("http://localhost:3000/");
//         done()
//       })
//       // .end()
//       // .end();
//     // expect(link).to.equal("http://localhost:3000/");
//   });
// });

describe('test duckduckgo search results', () => {
  it('should find the nightmare github link first', (done) => {
    const nightmare = Nightmare()
    nightmare
      .goto('https://duckduckgo.com')
      .type('#search_form_input_homepage', 'github nightmare')
      .click('#search_button_homepage')
      .wait('#zero_click_wrapper .c-info__title a')
      .evaluate(() =>
        document.querySelector('#zero_click_wrapper .c-info__title a').href
      )
      .end()
      .then((link) => {
        expect(link).to.equal('https://github.com/segmentio/nightmare');
        done();
      })
  });
});
