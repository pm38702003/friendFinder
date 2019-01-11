// Dependencies
// =============================================================
var express = require("express");
//var path = require("path");  //this is a awful place for this but per instructions 
var routes = require("./app/routing/htmlRoutes.js");
var data = require("./app/routing/apiRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes.app = app;


data.app = app;   //api call get and add //stored for access in module
data.addFriends();
data.getFriends();

routes.homeRoute();  //page request
routes.surveyRoute();
routes.defaultRoute();

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
