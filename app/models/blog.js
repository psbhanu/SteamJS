/**
* Package @ Steam JS - Blog Model	
* Author  @ psbhanu
*/

var mongoose = require('mongoose');
var Blog = new mongoose.Schema({
    title		: String,
    author		: String,
	content		: String, 
	image		: String, 
    isPublished	: Boolean
});
 
var BlogModel = mongoose.model('Blog', Blog);
 
module.exports = BlogModel;