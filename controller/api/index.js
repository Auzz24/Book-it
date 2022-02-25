const router = require('express').Router();
const bookRoutes = require('./book-routes');
const rentRoutes = require('./rent-routes');

router.use('/books', bookRoutes);
// router.use('/rent', rentRoutes);

module.exports = router;