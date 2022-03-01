const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const rentRoutes = require('../controller/api/rent-routes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/rent', rentRoutes);


module.exports = router;