var express = require('express');
var axois = require('axios');
var escape = require('escape-html');
var router = express.Router();

/* GET home page. */
router.post('/login', async function(req, res, next) {
  var email = req.body['email'];
  var pass = req.body['password'];
  email = escape(email);
  console.log(email);
  var a = await axois.get('https://bruxelles.monsiegesocial.be/api/staffs/search/' + email, {
    headers: {
      'authtoken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoic3RhZmZfbW9iaWxlIiwibmFtZSI6InN0YWZmX21vYmlsZSIsIkFQSV9USU1FIjoxNjU4ODYxNDIwfQ.AWRB9c1Uqy2fVk0dIkf_qPKQZBu3y8Ql-OuiwnRSDgc'
    }
  });

  console.log(a);
  res.json({
    success: true
  });
});

router.get('/auto_login', function(req, res, next){

});

router.get('/search', function(req, res, next){

});

router.get('/scan_qr', function(req, res, next){

});

router.get('/create_ticket', function(req, res, next){

});

router.get('/validate', function(req, res, next){

});

module.exports = router;
