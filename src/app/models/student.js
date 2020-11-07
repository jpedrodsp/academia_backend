const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        register_id: String
    }
);
const Student = mongoose.model('student', StudentSchema);

module.exports = Student;