const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const urlSchema = mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true
    },
    redirectURL:{
        type: String,
        required: true,
    },
    visitHistory:[
        {
            timestamp: Date
        }
    ],
    createdBy: String,

},{timestamps: true})

const URL =  mongoose.model("url",urlSchema)
module.exports = URL