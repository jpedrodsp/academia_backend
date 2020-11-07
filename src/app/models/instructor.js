const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema(
    {
        register_id: String
    }
);
const Instructor = mongoose.model('instructor', InstructorSchema);

module.exports = Instructor;