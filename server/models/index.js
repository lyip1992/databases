// MODELS is the methods to DB

var db = require('../db');
module.exports = {
  messages: {
    get: function (req, res) {
      console.log('logging in MODEL / messages / get ');

      db.dbConnection.query('SELECT users.username, message FROM messages, users WHERE users.uid = messages.uid;', function(err, rows, fields){
        res.writeHead(200);
        res.end(JSON.stringify(rows));
      });

    }, // a function which produces all the messages
    post: function (req, res) {
      var uid;
      db.dbConnection.query('SELECT username FROM users WHERE username ="' + req.body.username + '";'  , function(err, rows, fields){
        console.log("User posting, rows is  ", rows )
        if (!rows.length){
          db.dbConnection.query('INSERT INTO USERS (username) values("' +req.body.username+ '"); ')
        }

        db.dbConnection.query('SELECT uid FROM users WHERE username = "' + req.body.username + '";', function(error, rows, fields) {
          console.log("messages posting, ",req.body.message)
          uid = rows[0].uid;
          db.dbConnection.query('INSERT INTO MESSAGES (uid, message) values("' + uid + '" , "' + req.body.message + '" );  ' );
          res.writeHead(201);
          res.end();
        });

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

      // db.dbConnection.query('SELECT username FROM users WHERE username =' + req.body.username + ';'  , function(err, rows, fields){
      //   console.log("User posting, rows is  ", rows )
      //   if (!rows.length){
      //     db.dbConnection.query('INSERT INTO USERS (username) values("' +req.body.username+ '"); ')
      //   }
      //   // res.writeHead(201);
      //   // res.end();
      // });

    }
  }
};

