var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var db = require('./models/index.js');

//CONFIG//
app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/microblogapi');
var blogposts = require('./models/post.js');

app.get("/", function(req, res){
	res.render('index', { blogposts: blogposts});
});

app.post("/api/posts", function (req, res){

	blogposts.create(blogposts, function (err, post){
	res.json(blogposts);
	});	
//	blogposts.push('');

});
 app.delete("/api/posts:id", function(req, res){

 });

app.listen(3000, function(){
	console.log("reserved for microblog!");
});