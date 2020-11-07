const express = require('express');
const app = express();
const routes = require('./routes');

// Define constants
const appName = "AcademiaBackend"
const port = 3000

// Request JSON treatment middleware
app.use(express.json());

// Import routes
app.use(routes);

app.on('error', OnError);
var listener = app.listen(port, OnListening);

function OnListening() {
    console.log(`App ${appName} is now listening on port ${listener.address().port}`);
}

function OnError(err) {
    console.error(`[${Date.now()}]:\n${err}`);
}