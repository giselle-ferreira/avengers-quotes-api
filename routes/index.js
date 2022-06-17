const { Router } = require('express');
const quoteRoute = require('./quoteRoute');
const router = Router();

router.get('/', (req, res) => {
    res.send('Avengers Quotes API');
})

router.use(quoteRoute);

router.use((req, res, next) => {
    res.json({ message: "Something is wrong with the route" })
}) 

module.exports = router;
