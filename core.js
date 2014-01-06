//var Core = require('./core');

var Ctrl = function() {

	this.index = function(req, res){
		res.send('in home page ' + this.foo);
	};

	this.aboutus = function(req, res){
		res.send('in about us');
	};

	this.contactus = function(req, res){
		res.send('in contact us');
	};

	this.signup = function(req, res){
		res.send('in signup');
	};

	this.members = function(req, res){
		console.log(this.test);
		console.log(this.foo);
		res.send('in members ' + this.foo + ' ' + this.test);
	};

};

//Ctrl.prototype = new Core();

module.exports = Ctrl;
