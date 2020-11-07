const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        register_id: String,
        name: String,
        register_date: Date,
        hashed_password: String,
    }
);
const User = mongoose.model('user', UserSchema);

module.exports = User;