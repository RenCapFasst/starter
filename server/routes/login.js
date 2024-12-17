var express = require('express');
const { loginService } = require('../services/login');
var router = express.Router();

/* POST login. */
router.post('/', function (req, res, next) {
  const { login, password } = req.body;

  loginService().login({ login, password });

  res.status(200).json({ ok: true });
});

module.exports = router;
