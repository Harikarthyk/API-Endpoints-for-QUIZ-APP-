const express = require('express');
const router = express.Router();

const { getAllCategory, addCategory } = require('../controllers/category');

router.get('/allCategory', getAllCategory);

router.post('/addCategory', addCategory);

module.exports = router;
