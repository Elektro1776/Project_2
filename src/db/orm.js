const mysql = require('mysql')
const crypto = require('crypto')
const { knex } = require('../../server');
module.exports = {
  createUser(profile) {
    const { id, username, email, provider } = profile;
    return knex('users').where({
      github_id: id,
    }).then(user => {
      if (user.length === 0) {
        // console.log(' THERE IS NO USER', user);
        return knex('users').insert({
          username: username,
          github_id: id,
          auth_provider: provider
        })
      } else {
        return
      }
    })


  },
  getProject(id) {
     return knex.select().from('Project')
    // knex.select('utile_username', 'full_name', 'phone', 'email').from('User').where('isActive',1).timeout(1000, {cancel: true})
  },
  getUser(id) {
     return knex.select().from('user')
    // knex.select('utile_username', 'full_name', 'phone', 'email').from('User').where('isActive',1).timeout(1000, {cancel: true})
  },
  getUserStory(id) {
     return knex.select()
     .from('user_stories')
     .where('project_id', id)
     .then((results) => {
       if (results !== null) {
         return results;
       }
     }).catch((err) => {

       return console.error(' HUSTON ERR GETING USER STORY', err);
     })
    // knex.select('utile_username', 'full_name', 'phone', 'email').from('User').where('isActive',1).timeout(1000, {cancel: true})
  },
  createUserStory(userStory) {
    //NOTE: FOR SOME REASON KNEX/MYSQL does not like the date format sent from the client
    // need to figure out what is up with that
    const { storyTitle, storyDescription, storyProgress, storyDueDate, selectedMatrixSection, project_id } = userStory
    return knex('user_stories').insert({
      project_id: project_id,
      story_title: storyTitle,
      description: storyDescription,
      status: storyProgress,
      // due_date: storyDueDate,
      rank: selectedMatrixSection,
     })
      .then((results) => {
      // console.log(' DO WE HAVE RESULTS', results);
      return
    }).catch((err) => {
      console.log(' HUSTON ERRRRR', err);
    })
  }


}
