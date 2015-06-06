var models = require('../models');
var Promise = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get(req, res);
      // res.writeHead(200).end(stuffToSendBack);
    },
    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post(req, res);
      // res.writeHead(200).end();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
    },
    post: function (req, res) {
      models.users.post(req, res);
      res.writeHead(200).end();
    }
  }
};
