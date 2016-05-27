exports.Index = function(request, response){
	response.pageInfo.title = 'Steam JS Home';
    response.render('home/index', response);
};
 
exports.About = function(request, response){
	response.pageInfo.title = 'About Steam JS';
    response.render('about/index', response);
};