// Import MySQL connection.
var connection = require("../config/connection.js");

 // SELECT * FROM burgers
var orm ={
  all: function(table, callback){
    var queryString = 'SELECT * FROM ' + table;
    connection.query(queryString, function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

  // UPDATE burgers SET devoured = true WHERE id = <id value of selected burger>/;
  update: function(table, condition, callback){
      connection.query('UPDATE '+table+' SET devoured = true WHERE id='+condition+';', function (err, result) {
      if(err) throw err;
      callback(result);
    });
  },

  // INSERT INTO burgers (burger_name) VALUES (<user input with burger name>)

  add: function(table, userInput, callback){
    connection.query('INSERT INTO '+ table +' (burger_name) VALUES ("' +userInput+ '");', function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

// DELETE FROM burgers WHERE id = <input>;
  delete: function(table, condition, conditionVal, callback){
    connection.query('DELETE FROM ' + table + ' WHERE ' + condition + '=?', function(err, data){
      if(err) throw err;
      callback(data);
    });
  }
};

module.exports = orm;
