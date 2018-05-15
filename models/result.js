const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ResultSchema = new Schema(
    {
        url: { type: String, required: true },
        search: { type: Schema.ObjectId, ref: 'Search', required: true }
    }
);

module.exports = mongoose.model('Result', ResultSchema);