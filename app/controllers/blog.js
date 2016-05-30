/**
* Package @ Steam JS - Controller	
* Author  @ psbhanu
*/

var UserModel = require(APP_PATH_MODELS + '/user');
var BlogModel = require(APP_PATH_MODELS + '/blog');
exports.Index = function(request, response){
	BlogModel.find(function(error, results){
		if(error){
			console.log("Error getting results from database");
		}
		else {
			response.page.title = 'Blog';
			response.page.posts = results;
			response.render('blog/index', response);
		}
	});
};

exports.Add = function(request, response){
	response.page.title = 'Add - Blog';
	response.render('blog/add', response);
};

exports.Create = function(request, response){
    var title 	= request.body.title;
    var author 	= request.body.author;
    var content	= request.body.content;
    var image 	= request.body.image;
	
    var isPublished = request.body.isPublished;
    if(isPublished == 1) {
        isPublished = true;
    } 
	else {
		isPublished = false;
	}
    
	var post = new BlogModel({ 
        title: title,
        author: author,
        content: content,
        image: image,
        isPublished: isPublished
    });
 
    post.save(function(error){
        if(error) {
            console.log('Error');
            response.redirect('/blog?error=true&message=There was an error adding the post to the database');
        } else {
            response.redirect('/blog?success=true&message=Post created successfully');
        }
    });	
};