const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        student_date: { type: Date, default: Date.now },
        exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }]
    }
);
const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;