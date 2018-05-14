const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('hit /result');
});

router.post('/', (req, res) => {
    res.send('hit /search POST route');
})

module.exports = router;