const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, lowercase: true, unique: true },
        password: { type: String, required: true, select: false },
        name: { type: String, required: true },
        register_date: { type: Date, default: Date.now },
    }
);
UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});
const User = mongoose.model('User', UserSchema);

module.exports = User;