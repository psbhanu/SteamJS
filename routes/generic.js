/**
* Package @ Steam JS - Routes	
* Author  @ psbhanu
*/

var GenericController = require( APP_PATH_CONTROLLERS + '/generic-controller');

module.exports = function (app) {
    // Generic Routes
    app.get('/', GenericController.Index);
    app.get('/home',  GenericController.Index);
    app.get('/about',  GenericController.About);
};