const ExerciseSheet = require('../models/exercise_sheet');
const Exercise = require('../models/exercise');
const Instructor = require('../models/instructor');
const Student = require('../models/student');

async function register(exercise_sheet_data) {
    try {
        const instructor = await Instructor.findById(exercise_sheet_data.instructor_id);
        const student = await Student.findById(exercise_sheet_data.student_id);
        if (!instructor || !student) {
            console.error("Invalid instructor or student found during register.");
            return;
        }
        var exerciseList = [];
        for (var exerciseId of exercise_sheet_data.exercises) {
            const exercise = await Exercise.findById(exerciseId);
            if (!exercise) {
                console.error("Invalid exercise found during register.");
                return;
            }
        }

        const exercise_sheet = await ExerciseSheet.findOne(exercise_sheet_data);
        if (exercise_sheet) {
            console.error("Exercise Sheet already registered.");
            return;
        }
        exercise_sheet = await ExerciseSheet.create(exercise_sheet);
        return exercise_sheet;
    } catch (err) {
        console.error("Failed to register Exercise Sheet.");
        return;
    }
}

exports.register = register;