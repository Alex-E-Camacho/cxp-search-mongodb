const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SearchSchema = new Schema(
    {
        search_text: { type: String, required: true }
    }
);

module.exports = mongoose.model();