// MODELS is the methods to DB

var db = require('../db');
module.exports = {
  messages: {
    get: function (req, res) {
      console.log('logging in MODEL / messages / get ')
      // respond with usernamfields e, text
      var output;
      db.dbConnection.query('SELECT uid, message FROM messages', function(err, rows, fields){
        output = rows;
        console.log('model GETTING, output is, ' , output)
      });


    }, // a function which produces all the messages
    post: function (req, res) {
      var uid;
      db.dbConnection.query('SELECT uid FROM users WHERE username = "' + req.body.username + '";', function(error, rows, fields) {
        uid = rows[0].uid;
        db.dbConnection.query('INSERT INTO MESSAGES (uid, message) values("' + uid + '" , "' + req.body.message + '" );  ' );
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      // console.log('logging in MODEL / user / get ');
      // console.log(db.dbConnection.query('SELECT * FROM users;'));
    },
    post: function (req, res) {


      console.log("Req.body is, ",req.body.username )
      db.dbConnection.query('INSERT INTO USERS (username) values("' +req.body.username+ '"); ')
    }
  }
};

