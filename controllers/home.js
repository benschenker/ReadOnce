/**
 * GET /
 * Home page.
 */

var crypto = require('crypto');
var Tempa = require('../models/Tempa');

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.linkgen = function(req, res, next) {
	console.log(req.body['secret']);
	var id = crypto.randomBytes(20).toString('hex');
	
	var tempa = new Tempa({
		ID: id,
		SECRET: req.body['secret']
	});

	tempa.save(function(err) {
		if (err) return next(err);
		res.render('link', {
			id:id
		});
	});
	console.log(id+ ": " + tempa.SECRET);
};


exports.linkread = function(req,res) {
	var id = req.params.id;
	var secretText = Tempa.findOne({ID:id}, function(err,tempa){
		if(tempa){
			res.render('secret',{
				secret: tempa.SECRET
			});
			Tempa.remove({ ID: id }, function(err) {
    			if (err) return next(err);
			})
		}
		else{
			res.render('secret',{
				error: "Invalid URL, either it has been accessed already or it never existed!"
			});
		}
	});
};
