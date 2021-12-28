const router = require('express').Router();
const userApiRoutes = require('./user-routes');


router.use('/user', userApiRoutes);

module.exports = router;