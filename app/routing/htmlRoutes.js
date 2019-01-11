module.exports = {

    homeRoute: function () {
        var homeFile = this.myHtmlFile;         
        this.app.get("/home", function (req, res) {
            res.sendFile(homeFile)
        });
    },

    defaultRoute: function () {
        var homeFile = this.myHtmlFile;         
        this.app.get("/", function (req, res) {
            res.sendFile(homeFile)
        });
    },

    surveyRoute: function () {
        var surveyFile = this.sMyHtmlFile; 
        this.app.get("/survey", function (req, res) {
            res.sendFile(surveyFile);             
        });
    }
}


