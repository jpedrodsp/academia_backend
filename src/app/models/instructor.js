const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        instructor_date: { type: Date, default: Date.now },
    }
);
const Instructor = mongoose.model('Instructor', InstructorSchema);

module.exports = Instructor;