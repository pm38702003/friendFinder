var path = require("path");

module.exports = {

    homeRoute: function () {
        // var homeFile = this.myHtmlFile;  
        var homeFile = path.join(__dirname, "../public/home.html");
        this.app.get("/home", function (req, res) {
            res.sendFile(homeFile)
        });
    },

    surveyRoute: function () {
        //var surveyFile = this.sMyHtmlFile; 
        var surveyFile = path.join(__dirname, "../public/survey.html");
        this.app.get("/survey", function (req, res) {
            res.sendFile(surveyFile);
        });
    },

    defaultRoute: function () {
        //var homeFile = this.myHtmlFile;   
        var homeFile = path.join(__dirname, "../public/home.html");
        this.app.get("*", function (req, res) {
            res.sendFile(homeFile)
        });
    }
}




