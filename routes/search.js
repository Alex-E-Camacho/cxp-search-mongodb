const express = require('express');
const router = express.Router();
const search_controller = require('../controllers/searchController');
const result_controller = require('../controllers/resultController');

//Search Routes
router.get('/', search_controller.search_home);

router.get('/results', search_controller.search_results_get);

router.post('/', search_controller.search_create_post, result_controller.result_create_post);

module.exports = router;
