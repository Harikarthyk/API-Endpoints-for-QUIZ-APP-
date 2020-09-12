const express = require('express');
const router = express.Router();

const {
	getAllCategory,
	addCategory,
	getCategoryById,
} = require('../controllers/category');

router.get('/allCategory', getAllCategory);

router.get('/category/:categoryId', getCategoryById);

router.post('/addCategory', addCategory);

module.exports = router;
