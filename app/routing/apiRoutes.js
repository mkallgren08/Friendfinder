// This file needs to contain the routing to the API object
 var friendsData = require("../data/friends.js")
 var bestMatch = require("./matchmaker.js")
 //var qs = require("quicksort")

// Routes
// =============================================================

//Note: Since the routing info here has to be used by our server.js
// file, we need to contain all the possible routing into an export
// function with "app" as a parameter

module.exports = function(app) {
    app.get("/api/friendslist", function(req, res) {
        res.json(friendsData);
      });

    app.post('/api/friendslist', function(req, res){
        friendsData.push(req.body);
        //Be very very very careful of async-bugs here
        var match = bestMatch(req.body);
        res.json(match)
    })
 }