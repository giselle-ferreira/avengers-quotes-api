const express = require('express');
const router = express.Router();
const QuoteController = require('../controllers/QuoteController');

router.get('/quotes', QuoteController.getAllQuotes)
router.get('/quote/:_id', QuoteController.getQuote)
router.post('/create', QuoteController.createQuote)
router.put('/update', QuoteController.updateQuote)
router.delete('/delete/:_id', QuoteController.deleteQuote)


module.exports = router;