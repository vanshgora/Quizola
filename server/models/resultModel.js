const mongoose = require('mongoose');

const { Schema } = mongoose;

const quesSchema = new Schema({
    quesId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Question'
    },
    duration: {
        type: Number,
        required: true
    },
    isCorrect: {
        type: Boolean,
        required: true
    }
});

const testSchema = new Schema ({
    testId: {
        type: String,
        required: true
    },
    quesList: [quesSchema]
});

const resultSchema = new Schema({
    stuId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Student'
    },
    score: {
        type: [testSchema],
        required: true
    }
});

resultModel = mongoose.model('Result', resultSchema);
module.exports = resultModel;