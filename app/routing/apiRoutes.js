var friends = require("../data/friends");

module.exports = {

    getFriends: function () {
        this.app.get("/api/friends", function (req, res) {
            res.json(friends);
        });
    },

    addFriends: function () {
        this.app.post("/api/friends", function (req, res) {
            // req.body hosts is equal to the JSON post sent from the user
            // This works because of our body parsing middleware
            var newfriends = req.body;
            console.log(newfriends);
            console.log("friends from export "  + friends);
            // We then add the json the user sent to the character array
            friends.list.push(newfriends);
            // We then display the JSON to the users

            //find match and return best match 
            res.json(friends);
        });
    }
}