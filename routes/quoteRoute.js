const express = require('express');
const router = express.Router();
const QuoteController = require('../controllers/QuoteController');

router.get('/quotes', QuoteController.getAllQuotes)
router.get('/quote/:id', QuoteController.getQuote)
router.post('/create', QuoteController.createQuote)
router.put('/update', QuoteController.updateQuote)
router.delete('/delete/:id', QuoteController.deleteQuote)


module.exports = router;