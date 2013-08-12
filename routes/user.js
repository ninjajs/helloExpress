
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.single = function(req, res) {
	res.send('User ' + req.params.userId);
};

exports.create = function(req, res) {
	res.send('Creating username ' + req.body.username);
};