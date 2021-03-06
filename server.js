var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Tells express to include any static files in the folder other than html
app.use(express.static(__dirname + '/app/public'));

app.use(bodyParser.text());

app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// Basic route that sends the user first to the Survey Page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
app.get("/", function (req, res) {
    res.json(path.join(__dirname, "/app/public/home.html"));
});



// ==============================Require routing========================================

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});