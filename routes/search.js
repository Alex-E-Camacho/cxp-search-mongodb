const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hit /search redirect');
});

router.post('/', (req, res) => {
    res.send('POST /search hit');
})

module.exports = router;