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
			response.pageObject.title = 'Blog';
			response.pageObject.posts = results;
			response.render('blog/index', response.pageObject);
		}
	});
};

exports.Add = function(request, response){
	response.pageObject.title = 'Blog - Add';
	response.render('blog/add', response.pageObject);
};

exports.Create = function(request, response){
    var title 	= request.body.title;
    var author 	= request.body.author;
    var content	= request.body.content;
    var image 	= request.body.image;

	if(IsNullOrEmpty([title, author, content])) {
		return ErrorRedirect(response, '/blog/add', 'Validation failed, Please check and fill correct data!');
    } 
	
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
            // console.log('Error');
			return ErrorRedirect(response, '/blog/add', 'There was an error saving the post to the database!');
        } else {
			return SuccessRedirect(response, '/blog', 'Post created successfully!');
        }
    });	
};

exports.Edit = function(request, response){
	var id = request.params.id;
    BlogModel.findOne({ _id: id }, function(error, result){
        if(error) {
            console.log('Error');
			return ErrorRedirect(response, '/blog/edit/' + id, 'There was an error finding the requested blog!');
        }
        else {
            response.pageObject.post = result
			response.pageObject.title = 'Blog - Edit';
			response.render('blog/edit', response.pageObject);
        }
    });	
};
exports.Update = function(request, response){
    var id 		= request.body.id;
	var title 	= request.body.title;
    var author 	= request.body.author;
    var content	= request.body.content;
    var image 	= request.body.image;

	if(IsNullOrEmpty([id, title, author, content])) {
		return ErrorRedirect(response, '/blog/edit/' + id, 'Validation failed, Please check and fill correct data!');
    } 
	
    var isPublished = request.body.isPublished;
    if(isPublished == 1) {
        isPublished = true;
    } 
	else {
		isPublished = false;
	}
    
	// Updating Post
	var condition 	= { _id: id };
	var data 		= { 
        title: title,
        author: author,
        content: content,
        image: image,
        isPublished: isPublished
    };
	var options = { multi: true };
	
	BlogModel.update( condition, data, options, function(error){
        if(error) {
            // console.log('Error');
			return ErrorRedirect(response, '/blog/edit/' + id, 'There was an error updating the post to the database!');
        } else {
			return SuccessRedirect(response, '/blog/', 'Post updated successfully!');
        }
	});		
};

exports.Delete = function(request, response){};
