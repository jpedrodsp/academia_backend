const Student = require('../models/student');

async function register(student_data) {
    if (!student_data) {
        return;
    }
    try {
        const user = await User.findById(student_data.user);
        if (!user) {
            console.error("Couldn't find referenced user in Student Data.");
            return;
        }
        const student = await Student.create(student_data);
        return student;
    } catch (err) {
        console.error("An error ocurred while registering Student.");
        return;
    }
}

exports.register = register;