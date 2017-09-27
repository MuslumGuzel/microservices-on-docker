var express = require('express');
var router = express.Router();

/* GET say hello */
router.get('/sayHello', function(req, res, next) {
  res.send('Hello Microservices');
});

module.exports = router;
