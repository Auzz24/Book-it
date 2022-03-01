const router = require('express').Router();
<<<<<<< HEAD

const userRoutes = require('./user-routes');


router.use('/user', userRoutes);
=======
const bookRoutes = require('./book-routes');
const rentRoutes = require('./rent-routes');

router.use('/books', bookRoutes);
router.use('/rent', rentRoutes);
>>>>>>> 81ab4c9ace450a0bf07eec26213e366bea15b121

module.exports = router;