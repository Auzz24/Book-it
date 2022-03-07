const router = require('express').Router();

const userRoutes = require('./user-routes');
// const addPostRoutes = require('./addpost');
const rentRoutes = require('./rent-routes');

router.use('/user', userRoutes);
// router.use('/addpost', addPostRoutes);
router.use('/rent', rentRoutes);



module.exports = router;
