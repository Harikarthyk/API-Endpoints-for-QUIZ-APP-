const Category = require('../models/category');

//desc : Get All Categories
//type : GET
exports.getAllCategory = (req, res) => {
	Category.find({}, (error, result) => {
		if (error) {
			return res.status(400).json({
				error: 'Unable to fetch All Categories ...',
			});
		}
		return res.status(200).json({
			categories: result,
		});
	});
};

//desc : add new Category
//type : POST
exports.addCategory = (req, res) => {
	new Category(req.body).save((error, result) => {
		if (error) {
			return res.status(400).json({
				error: 'Error in adding Category',
			});
		}
		return res.status(200).json({
			message: `${req.body.name} Added to Category`,
		});
	});
};
