// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path 		= require('path');


// Routes
// =============================================================
module.exports = function(app){

	// Each of the below routes just handles the HTML page that the user gets sent to.
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.post('/add', function(req, res){
		var listItem = req.body;
		
		GroceryItem.create({
			name: listItem.name,
			department: listItem.department,
			quantity: listItem.quantity,
			status: 'Active'
		});
	});

	app.get('/all', function(req, res){
		GroceryItem.findAll({})
			.then(function(result){
				res.json(result);
			});
		res.send('');
	});
}
