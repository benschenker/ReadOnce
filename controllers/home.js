/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.linkgen = function(req, res, next) {
  console.log(req.body['secret']);
  res.send({"success":true,"errors":[],"response": req.body['secret']});
};
