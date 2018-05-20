const Result = require('../models/result');

exports.result_create_post = (req, res) => {
    let newResult = new Result({ url: req.body.result, search: req.searchData });
    newResult.save((err, savedResult) => {
        if (err) {
            console.log(err);
        } else {
            res.send(savedResult);
        }
    })
};

// exports.result_create_post = (req, res) => {
//   req.body.results.forEach((resultUrl) => {
//     let newResult = new Result({ url: resultUrl, search: req.searchData });
//
//     newResult.save((err, savedResult) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(savedResult);
//       }
//     })
//   })
//   res.send('All saved');
// }
