var users = require('./../controllers/users.js');

//## add more controllers here 

module.exports = function(app){
	app.get('/user_index', function(req, res){
		users.user_index(req, res);
	});

	app.get('/get_user_by_name/:name', function(req, res){
		users.get_user_by_name(req, res);
	});

	app.post('/registerUser', function(req, res){
		users.registerUser(req, res);
	});
}