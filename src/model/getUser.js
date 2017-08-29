const orm = require('../db/orm')();


module.exports = function() {
  var that = {};


  function getUserInfo(id) {
      orm.getUser(id)
  }




  return that;
}
