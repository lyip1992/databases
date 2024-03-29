var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  router.route("/" + route)  // router messages or users
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

