var friends = require("../data/friends");

module.exports = {

    getFriends: function () {
        this.app.get("/api/friends", function (req, res) {
            res.json(friends);
        });
    },

    addFriends: function () {
        this.app.post("/api/friends", function (req, res) {
            var newFriend = req.body;
            var compatabilityScore = 0;
            var low = 1000;
            var match
            for (var x = 0; x < friends.list.length; x++) {
                arr2 = friends.list[x].scores;
                for (var i = 0; i < newFriend.scores.length; i++) {
                    compatabilityScore = compatabilityScore + Math.abs(parseInt(newFriend.scores[i]) - parseInt(arr2[i]));
                }
                if (compatabilityScore < low) {
                    match = x //want the index of the lowest person
                    low = compatabilityScore;
                }
                compatabilityScore = 0;
            }
            friends.list.push(newFriend);
            //find match and return best match
            //console.log("low-->" + low + " match-->" + match +" name-->" + friends.list[match].name ) 
            return res.json(friends.list[match]);
            //console.log(friends.list[match].name)
        });
    }
}

