const express = require('express');
const router = express.Router();
const search_controller = require('../controllers/searchController');

//Search Routes
router.get('/', search_controller.search_home);

router.get('/results', search_controller.search_results_get);

router.post('/', search_controller.search_create_post);

module.exports = router;