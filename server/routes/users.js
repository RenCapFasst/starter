var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST user */
router.post('/users', function(req, res, next) {
  console.log(req.body);
  res.send('User added successfully');
});

module.exports = router;
