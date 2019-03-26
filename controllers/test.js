const data = require('../data/test.json');

exports.getTest = (req, res, next) => {
	res.status(200);
	res.send({
		data
	});
};