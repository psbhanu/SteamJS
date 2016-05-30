/**
* Package @ Steam JS - Controller	
* Author  @ psbhanu
*/

exports.Index = function(request, response){
	response.page.title = 'Home';
	response.render('home/index', response);
};
 
exports.About = function(request, response){
	response.page.title = 'About Us';
    response.render('about/index', response);
};