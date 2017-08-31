const mysql = require('mysql')
const crypto = require('crypto')
const { knex } = require('../../server');
module.exports = {
  createUser(profile) {
    // console.log(id,username,authProvider)
    const { id, username, email, provider } = profile;
    // console.log(' WHAT IS OUR ID?', id);
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
    console.log(' WHAT IS THE ID WE ARE SENDING?',id);
     return knex('User_Story').where('project_title', id).then((results) => {
       console.log(' WHAT ARE THE RESULTS', results);
       return results;
     }).catch((err) => {
       console.log(' HUSTON ERR GETING USER STORY', err);
     })
    // knex.select('utile_username', 'full_name', 'phone', 'email').from('User').where('isActive',1).timeout(1000, {cancel: true})
  },
  createUserStory(userStory) {
    // console.log(' WHAT IS OUR USER STORY?', userStory);
    const { storyTitle, storyDescription, storyProgress, storyDueDate, selectedMatrixSection, project_id } = userStory
    return knex('User_Story').insert({
      story_title: storyTitle,
      story_description: storyDescription,
      story_progress: storyProgress,
      story_due_date: storyDueDate,
      select_matrix_section: selectedMatrixSection,
      project_title: project_id,
     })
      .then((results) => {
      // console.log(' DO WE HAVE RESULTS', results);
      return
    }).catch((err) => {
      console.log(' HUSTON ERRRRR', err);
    })
  }


}
