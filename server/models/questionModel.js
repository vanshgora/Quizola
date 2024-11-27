const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    options: {
        type: Array,
        required: true,
        trim: true
    },
    answer: {
        type: String,
        required: true
    },
    topic: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    weightage: {
        type: String,
        required: true
    }
});

const questionModel = mongoose.model('question', questionSchema);

module.exports = questionModel;