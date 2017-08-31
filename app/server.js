// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });

//SECONDARY DEPENDENCIES (i.e. routing info)
// Note: the actual routing scripts will be written in their
// respective ****Routes.js files

// API Routing
// =============================================================
var apiRoutes = require("./routing/apiRoutes.js")
apiRoutes(app);

// HTML Routing
// =============================================================
var htmlRoutes = require("./routing/htmlRoutes.js")
htmlRoutes(app);








