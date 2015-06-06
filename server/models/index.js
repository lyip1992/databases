// MODELS is the methods to DB

var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      console.log('logging in MODEL / messages / get ')

    }, // a function which produces all the messages
    post: function () {
      console.log('logging in MODEL / messages / post ')

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('logging in MODEL / user / get ')

    },
    post: function () {
      console.log('logging in MODEL / user / post ');
      db.query('INSERT INTO USERS (name) values("bryan"); ')
    }
  }
};

