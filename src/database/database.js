var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'bglu21ovtgbghpmvwupt-mysql.services.clever-cloud.com',
      user : 'uny1otqjot5wxyah',
      password : 'YlctVMPkzl0F0ZogXD5f',
      database : 'bglu21ovtgbghpmvwupt'
    }
  });

module.exports = knex