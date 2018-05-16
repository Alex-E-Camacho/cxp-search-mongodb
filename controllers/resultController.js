const Result = require('../models/result');

exports.result_create_post = (req, res) => {
    // res.send('NOT IMPLEMENTED: ResultInstance create POST');
    let newResult = new Result({ url: 'boywalksdog.com', search: req.searchData });

    newResult.save((err, savedResult) => {
        if (err) {
            console.log(err);
        } else {
            res.send(savedResult);
        }
    })
};