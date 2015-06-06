var models = require('../models');
var Promise = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get(req, res);
      res.writeHead(200).end();
    },
    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post(req);
      res.writeHead(200).end();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
    },
    post: function (req, res) {
      console.log("collection Req is", req)

      models.users.post(req);
      res.writeHead(200).end();
    }
  }
};
