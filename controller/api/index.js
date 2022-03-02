const router = require('express').Router();

const userRoutes = require('./user-routes');
const bookRoutes = require('./book-routes');
const rentRoutes = require('./rent-routes');

router.use('/user', userRoutes);
router.use('/books', bookRoutes);
router.use('/rent', rentRoutes);



module.exports = router;
