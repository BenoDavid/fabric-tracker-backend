
const express = require('express');
const router = express.Router();

const fabricTrackingRoutes = require('./FabricTrackingRoutes');


// // Use routes
router.use('/fabrictracking', fabricTrackingRoutes);


module.exports = router;
