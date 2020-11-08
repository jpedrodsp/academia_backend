const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

async function authenticate(email, password) {
    try {
        if (!email || !password || !typeof (email) == String || !typeof (password) == String) {
            throw Error('Missing email/password');
        }
        const user = await User.findOne({ email });
        if (!user) {
            console.error("Couldn't find user.")
            return;
        }
    } catch (err) {
        console.error("An error ocurred during authentication.")
        return;
    }
}

async function register(user) {
    const { email } = user;
    if (!user) {
        return;
    }
    try {
        if (await User.findOne({ email })) {
            console.error("User already registered.");
            return;
        }
        console.log(`Creating user: ${email}`);
        const user = await User.create(user);
        return user;
    } catch (err) {
        console.error("An unexpected error ocurred while registering user.");
        return;
    }
}

exports.authenticate = authenticate;
exports.register = register;