var Nerd = require('./models/nerd');

module.exports = function(app){
	app.get('/api/nerds',function(req,res){
		Nerd.find(function(err,res){
			if(err)
				res.send('Error: '+ err);
			res.json(nerds);
		});
	});
	app.get('*',function(req,res){
		res.sendfile('./public/views/back-end.html');
	});
}