'use strict';

module.exports = function(app) {

  var mysqldb = require('../controllers/MySQLController');  
    
  //   *********** USUARIOS ***********
  app.route('/api/users/list')
    .get(mysqldb.list_users);   

  app.route('/api/users/find')
    .get(mysqldb.find_users);

  app.route('/api/users/detail')
    .get(mysqldb.user_detail);    

  app.route('/api/users/add')
    .post(mysqldb.add_user);

  app.route('/api/users/update/kudos/:id')
    .put(mysqldb.update_kudos);

  app.route('/api/users/del/:id')
    .delete(mysqldb.del_user);       
};