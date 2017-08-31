var mysql = require ('mysql')

module.exports = {
  client: 'mysql',
  connection: {
    host : 'nebuchadnezzar.c2hwk9mbsf3x.us-west-1.rds.amazonaws.com',
    user : 'pbk000',
    password : 'FullStack1313',
    database : 'Utile_db',
  }
};
// const knex = require('knex')(config)
//
//
// const Knex = require('knex');
// const knex = Knex({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         user: 'postgres',
//         password: '',
//         database: 'travis_ci_test'
//     }
// });
//
// const store = new KnexSessionStore({
//     knex: knex,
//     tablename: 'sessions' // optional. Defaults to 'sessions'
// });
//
//
// module.exports = knex;
