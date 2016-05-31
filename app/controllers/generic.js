/**
* Package @ Steam JS - Controller	
* Author  @ psbhanu
*/

exports.Index = function(request, response){
	response.pageObject.title = 'Home';
	response.render('home/index', response.pageObject);
};
 
exports.About = function(request, response){
	response.pageObject.title = 'About Us';
    response.render('about/index', response.pageObject);
};