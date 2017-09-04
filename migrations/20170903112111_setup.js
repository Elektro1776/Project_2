
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', (table) => {
      table.increments();
      table.string('username');
      table.string('github_id');
      table.string('email').nullable();
      table.string('auth_provider').notNullable();
    }),
    knex.schema.createTableIfNotExists('user_stories', (table) => {
      table.increments();
      table.integer('project_id').notNullable();
      table.string('story_title').unique().notNullable();
      table.string('description').notNullable();
      table.string('status').notNullable();
      table.timestamp('due_date').nullable();
      table.string('rank').notNullable();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('user_stories'),
  ])
};
