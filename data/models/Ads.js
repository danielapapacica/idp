const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
}, { timestamps: true });

const AdsModel = mongoose.model('Ads', AdsSchema);

module.exports = AdsModel;
