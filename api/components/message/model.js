const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'users'
    },
    message: {
        type: String,
        required: true,
    },
    date: Date
})

const model = mongoose.model('messages', schema)

module.exports = model
