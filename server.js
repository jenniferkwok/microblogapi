var express = require('express');
var app = express();
// var ???? = [{
// },
// {
// }];

//CONFIG//
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/api/posts", function(req, res){
//	res.send('microblog testing123')
	res.render('index.ejs');
});

// app.post("/api/posts", function (req, res){
// });

app.delete("/api/posts:id", function(req, res){
});

app.listen(3000, function(){
	console.log("reserved for microblog!");
});