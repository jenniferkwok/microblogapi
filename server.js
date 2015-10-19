var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var blogposts = [{
// },
// {
// }];

//CONFIG//
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", function(req, res){
	res.render('index');
});

app.post("/api/posts", function (req, res){
	res.json(req.body);
	blogposts.push('');
});

app.delete("/api/posts:id", function(req, res){

});

app.listen(3000, function(){
	console.log("reserved for microblog!");
});