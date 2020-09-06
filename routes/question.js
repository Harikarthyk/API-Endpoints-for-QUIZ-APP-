const express = require('express');
const router = express.Router();

const {
	getQuestionByCategory,
	getCategoryById,
} = require('../controllers/question');

const Question = require('../models/question');

router.param('categoryId', getCategoryById);

router.get('/get/:categoryId', getQuestionByCategory);

router.post('/add/:categoryId', (req, res) => {
	new Question(req.body).save((error, result) => {
		if (error) {
			return res.status(400).json({
				error: 'Error in adding Questions',
			});
		}
		return res.status(200).json({
			message: 'Question Added Successfully',
		});
	});
});



module.exports = router;
