const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema(
    {
        name: { type: String, required: True },
        date: { type: Date, default: Date.now }
    }
);
const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;