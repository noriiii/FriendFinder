var tableData = require("../data/friends");

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
    res.json(friends);

    // friends data shall be passed in this section
    // insert compatibility matrix
    // Totaldifference = user1 - user2
    // Get absolute value of Totaldifference
    // display match in a pop up window
  });

  app.post("/api/friends", function(req, res) {

      friends.push(req.body);
      res.json(true);
  });

  app.post("/api/clear", function() {
    friends = [];
    
    console.log(friends);
  });
};
