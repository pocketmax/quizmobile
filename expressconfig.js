var express = require('express');

require('express-namespace');

var path = '/home/rayjay/nodejs/express/projects/quizmobile.pocketmax/app/';

var app = express();

app.set('view engine', 'jade');
app.set('views', path + 'templates');

app.use('/js', express.static(path + ''));
app.use('/css', express.static(path + 'css'));
app.use('/imgs', express.static(path + 'imgs'));

//var MainClass = require(path + 'controllers/main');
//var mainCtrl = new MainClass();

app.namespace('/', function(){

	app.get('', function(req,res){
		res.render('index');
//		mainCtrl.index.apply(mainCtrl,arguments);
	});

//	app.get('aboutus/:method/', aboutusCtrl);

});

module.exports = app;
