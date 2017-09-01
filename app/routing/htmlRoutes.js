//This file needs to contain the data that will route your HTML requests

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================

//Note: Since the routing info here has to be used by our server.js
// file, we need to contain all the possible routing into an export
// function with "app" as a parameter

//Note: I can add app.use(express.static('public')) to avoid writng the "../public/"

module.exports = function(app){
    // Basic route that sends the user to the home page if no destination
    // declared in the url
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Basic route that sends the user first to the home page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}

