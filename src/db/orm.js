const mysql = require('mysql')
const crypto = require('crypto')
const knex = require('knex')(require('./db_config.js'))


module.exports = {
  createUser({utile_username,github_federation_id,initial_federation}) {
    // console.log(id,username,authProvider)
     return knex('Authentication').insert({
       utile_username,
       github_federation_id,
       initial_federation
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
