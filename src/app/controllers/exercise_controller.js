const Exercise = require('../models/exercise');

async function register(exercise_data) {
    if (!exercise_data) {
        return;
    }
    try {
        const exercise = await Exercise.create(exercise_data);
        return exercise;
    } catch (err) {
        return;
    }
}

exports.register = register;