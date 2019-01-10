// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends.js");
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
var tempPath = path.join(__dirname, "app/public/home.html");
var stempPath = path.join(__dirname, "app/public/survey.html");
routes.myHtmlFile = tempPath;
routes.sMyHtmlFile = stempPath;

data.app = app;   //api call get and add
data.addFriends();
data.getFriends();

routes.homeRoute();  //page request
routes.surveyRoute();

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
