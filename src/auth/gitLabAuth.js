const passport = require('passport');
var GitLabStrategy = require('passport-gitlab2');

module.exports = passport.use( new GitLabStrategy({
    clientID: process.env.GIT_HUB_CLIENT_ID,
    clientSecret: process.env.GIT_HUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/gitlab/authorized",
  },
  function(accessToken, refreshToken, profile, cb) {
    // TODO: add our schema method to create user or find user if they have already signed up.
    console.log(' WHAT IS OUR ACCESS TOKEN???', accessToken, refreshToken, profile);
    function userTest(){
      const userTest = knex.select('initial_federation').from('Authentication').whereNotNull('utile_username').then((userExists) => {
        if (userExists.length === 0) {
          if (userTest == undefined){
            const user = {
              initial_federation: 'gitlab',
              utile_username: username,
              gitlab_federation_id: id,
            }
            orm.createUser(user).then((auth) => {
             console.log(auth);
             return done(null, username);
      })
      else (true) {
        knex('Authentication').update('gitlab_federation_id', id)

      }

       });

      }
    }
    cb(profile.id);
  }
));

// module.exports = passport;
