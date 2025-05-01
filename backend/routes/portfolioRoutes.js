const express = require('express');
const router = express.Router();
const { createPortfolio, getPortfolio } = require('../controllers/portfolioController');

router.post('/', createPortfolio);
router.get('/:username', getPortfolio);

module.exports = router;
