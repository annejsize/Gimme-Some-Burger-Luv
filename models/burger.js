var orm = require("../config/orm.js");

var burger = {
  all: function(cb){
    orm.all('burgers', function(res){
      cb(res);
    });
  },

  update: function(id, cb){
    orm.update('burgers', id, function(res){
      cb(res);
    });
  },

  add: function(vals, cb){
    orm.add('burgers', vals, function(res){
      cb(res);
    });
  },

  delete: function(condition, cb){
    orm.delete('burgers', 'id', condition, function(res){
      cb(res);
    });
  }
};

module.exports = burger;
