const mysql = require('mysql')
const crypto = require('crypto')
const { knex } = require('../../server');
module.exports = {
  createUser(profile) {
    // console.log(id,username,authProvider)
    const { id, username, email, provider } = profile;
    console.log(' WHAT IS OUR ID?', id);
    return knex('Authentication').where({
      github_federation_id: id,
    }).then(user => {
      if (user.length === 0) {
        console.log(' THERE IS NO USER', user);
        return knex('Authentication').insert({
          utile_username: username,
          github_federation_id: id,
          initial_federation: provider
        })
      } else {
        console.log(' WE HAVE A USER', user);
        return
      }
    })


  },
  getProject(id) {
     return knex.select().from('Project')
    // knex.select('utile_username', 'full_name', 'phone', 'email').from('User').where('isActive',1).timeout(1000, {cancel: true})
  },
  getUser(id) {
     return knex.select().from('User')
    // knex.select('utile_username', 'full_name', 'phone', 'email').from('User').where('isActive',1).timeout(1000, {cancel: true})
  },
  getUserStory(id) {
     return knex.select().from('User_Story')
    // knex.select('utile_username', 'full_name', 'phone', 'email').from('User').where('isActive',1).timeout(1000, {cancel: true})
  },


}
