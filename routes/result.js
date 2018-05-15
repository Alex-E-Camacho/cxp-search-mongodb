const express = require('express');
const router = express.Router();
const result_controller = require('../controllers/resultController');

//Result routes

router.post('/', result_controller.result_create_post);

module.exports = router;