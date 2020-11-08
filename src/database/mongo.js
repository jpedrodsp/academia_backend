const mongoose = require('mongoose');

// Define Mongoose parameters
const mongo_server_url = 'mongodb://localhost/academia'
const mongo_connection_params = {
    useNewUrlParser: true
}
// Connect to server
console.log(`Connecting to MongoDB server: ${mongo_server_url}`);
mongoose.connect(mongo_server_url, mongo_connection_params);

// Define Database object
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`Opened connection to MongoDB server: ${db.host}`);
});

module.exports = db;