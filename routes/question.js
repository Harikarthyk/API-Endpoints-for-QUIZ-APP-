const express = require('express');
const router = express.Router();

const {
	getQuestionByCategory,
	getCategoryById,
	addQuestionByCategory,
} = require('../controllers/question');

router.param('categoryId', getCategoryById);

router.get('/get/:categoryId', getQuestionByCategory);

router.post('/add/:categoryId', addQuestionByCategory);

module.exports = router;
