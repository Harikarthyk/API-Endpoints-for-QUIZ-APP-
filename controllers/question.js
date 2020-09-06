const Question = require('../models/question');
const Category = require('../models/category');

//Middleware for setting req.category with the param id
exports.getCategoryById = (req, res, next, id) => {
	Category.findById(id, (error, result) => {
		if (error) {
			return res.status(400).json({
				error: 'Error in finding the Category',
			});
		}
		req.category = result;
		next();
	});
};

//desc : get All question from category
//type : GET
exports.getQuestionByCategory = (req, res) => {
	Question.find({ category: req.category._id }, (error, result) => {
		if (error) {
			return res.status(400).json({
				error: 'Error in fetching Question',
			});
		}
		return res.status(200).json({
			questions: result,
		});
	});
};
