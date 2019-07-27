var connection = require("./connection.js");

var orm = {
    selectAll: function() {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    InsertOne: function() {
      var queryString = "";
      console.log(queryString);
      connection.query(queryString, [], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(){
      var queryString = "";
         
      connection.query(queryString, [], function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  
};
  
  module.exports = orm;