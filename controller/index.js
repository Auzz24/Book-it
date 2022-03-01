const router = require('express').Router();
<<<<<<< HEAD

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});
=======
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const rentRoutes = require('../controller/api/rent-routes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('rent', rentRoutes);
router.use('buy', buyRoutes);

>>>>>>> 81ab4c9ace450a0bf07eec26213e366bea15b121

module.exports = router;