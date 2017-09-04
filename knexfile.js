// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'utile',
      user: 'root',
      password: 'password',
      host: '127.0.0.1',
      port: '3306'
    }
  },


  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'mysql',
    connection: {
      database: 'Utile',
      user: 'pbk000',
      password: 'FullStack1313',
      host: 'utile.c2oheji1ibf5.us-west-2.rds.amazonaws.com',
      port: '3306'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
