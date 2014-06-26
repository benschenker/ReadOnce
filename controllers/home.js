/**
 * GET /
 * Home page.
 */

var crypto = require('crypto');
var store = {};

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.linkgen = function(req, res, next) {
  console.log(req.body['secret']);
  var id = crypto.randomBytes(20).toString('hex');
  store[id]= req.body['secret'];
  console.log(id+ ": " + store[id]);
  res.send({"success":true,"errors":[],"response": id});
};


exports.linkread = function(req,res) {
  console.log(store);
  var id = req.params.id;
  var secretText = store[id];
  if (secretText==undefined) {
    res.render('secret',{
      error: "Invalid URL, either it has been accessed already or it never existed!"
    });
  }
  else {
    res.render('secret',{
      secret: store[id]
    });
    delete store[id];
    console.log(store);
  }
};

