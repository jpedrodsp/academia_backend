const mongoose = require('mongoose');

const ExerciseSheetSchema = new mongoose.Schema(
    {
        instructor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },
        student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
        exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }]
    }
);
const ExerciseSheet = mongoose.model('ExerciseSheet', ExerciseSheetSchema);

module.exports = ExerciseSheet;