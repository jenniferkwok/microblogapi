var express = require('express');
var app = express();
// var ???? = [{
// },
// {
// }];

app.get("/api/posts", function(req, res){
	res.send('microblog testing123')
//	res.render('index',{});
});

app.post("/api/posts", function (req, res){
  var newFood = req.body;
  // add a unique id
  if (foods.length !== 0){
	  newFood.id = foods[foods.length - 1].id + 1;
  } else {
  	newFood.id = 0;
  }
  // add new food to DB (which, in this case, is an array)
  foods.push(newFood);
  // send a response with newly created object
  res.json(newFood);
});

app.delete("/api/posts:id", function(req, res){
});

app.listen(3000, function(){
	console.log("reserved for microblog!");
});