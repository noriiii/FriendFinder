var tableData = require("../data/friends.js");

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
    res.json(tableData);

    // friends data shall be passed in this section
    // insert compatibility matrix
    // Totaldifference = user1 - user2
    // Get absolute value of Totaldifference
    // display match in a pop up window
  });

  app.post("/api/friends", function(req, res) {

      tableData.push(req.body);
      res.json(tableData);
  });

//   app.post("/api/clear", function() {
//     friends = [];
    
//     console.log(friends);
//   });
};
