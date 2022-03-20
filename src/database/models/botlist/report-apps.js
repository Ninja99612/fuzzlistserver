const mongoose = require('mongoose')
const schema = new mongoose.Schema({
botID: String,
reason: String,
username: String,
tags:Array,
userID:String,
})
module.exports = mongoose.model('report', schema)