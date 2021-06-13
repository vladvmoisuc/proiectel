const express = require('express');
const router = express.Router();
const { getAllArticles, getArticle } = require('../controllers/articles');

router.get('/', getAllArticles);
router.get('/:path', getArticle);

module.exports = router;
