console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$.ajax({
	url: '/api/posts',
	type: 'GET',
}).done(function(){

});

//POSTS AS ARRAY
var blogposts =[];

//DELETE BUTTON
$(document).on( "click", "#delete", function() {
//	  original delete button code
//    $(this.parentElement.parentElement).remove();
    $.ajax({
    	url: '/api/posts/:id',
    	type: 'DELETE',
    	success: function(){
    		$(this.parentElement.parentElement).remove();
    	}
    });
} ); 

//SUBMIT BUTTON
$('form').submit(function(){
	event.preventDefault();

	var blogposts = $(this).serialize();

	$.post('/api/posts',function(res){
		console.log(res);
	var newBlogPost = $('#content').val();
	var deleteButton = '<button id="delete" class="btn btn-danger"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button>';
	$('#blogContent').append('<div class="panel panel-default"><div class="panel-body">'+ newBlogPost+deleteButton+'</div></div>');
	$('form')[0].reset();
});

$.ajax({
  url: '/api/posts',
  type: 'POST',
  success: function(res){
  	console.log('this is post');
  	$('#blogContent').append('<div class="panel panel-default"><div class="panel-body">'+ newBlogPost+deleteButton+'</div></div>');
  }
})

  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });

});

});

