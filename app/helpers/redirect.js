/**
* Package @ Steam JS - Helper - Generic
* Author  @ psbhanu
*/

var helper = helper || {};

helper.SuccessRedirect = function(response, route, message) {
	
    if(typeof message !== 'undefined') {
        response.redirect(route + '?success=true&message=' + message);
    }
    else {
        response.redirect(route + '?success=true');
    }
};
 
helper.ErrorRedirect = function(response, route, message) {
     
    if(typeof message !== 'undefined') {
    response.redirect(route + '?error=true&message=' + message);
    }
    else {
    response.redirect(route + '?error=true');
    }
};

module.exports = helper;