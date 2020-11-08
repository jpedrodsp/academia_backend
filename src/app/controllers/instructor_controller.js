const Instructor = require('../models/instructor');

async function register(instructor_data) {
    if (!instructor_data) {
        return;
    }
    try {
        const user = await User.findById(instructor_data.user);
        if (!user) {
            console.error("Couldn't find referenced user in Instructor Data.");
            return;
        }
        const instructor = await Instructor.create(instructor_data);
        return instructor;
    } catch (err) {
        console.error("An error ocurred while registering Instructor.");
        return;
    }
}

exports.register = register;