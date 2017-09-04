var mysql = require ('mysql')

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
  production: {
    client: 'mysql',
    connection: {
      database: 'Utile',
      user: 'pbk000',
      password: 'FullStack1313',
      host: 'utile.c2oheji1ibf5.us-west-2.rds.amazonaws.com',
      port: '3306'
    }
  }
};
