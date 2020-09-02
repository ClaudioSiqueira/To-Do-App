const db_config = require('./db_config.json')
var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host :db_config.host,
      user : db_config.user,
      password : db_config.password,
      database : db_config.database
    }
  });

module.exports = knex