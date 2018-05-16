const Search = require('../models/search');
const Result = require('./resultController');

exports.search_home = (req, res) => {
    res.send('NOT IMPLEMENTED: Search home page');
};

exports.search_results_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Search results GET')
}

exports.search_list = (req, res) => {
    res.send('NOT IMPLEMENTED: Search list GET');
};

exports.search_create_post = (req, res, next) => {
    let newSearch = new Search({ search_text: req.body.search_text });

    newSearch.save((err, savedSearch) => {
        if (err) {
            console.log(err);
        } else {
            req.searchData = savedSearch;
        }
          next();
    })
};