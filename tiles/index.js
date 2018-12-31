var express = require('express');
var app = express();

app.get('/', function (req, res) {

  const x = req.query["x"];
  const y = req.query["y"];
  const z = req.query["z"];

  if (x == null || y == null || z == null) {
    res.status(500).send("Invalid parameters. Set x, y, and z.")
    return;
  }

  res.send({
    "Output": `${x}, ${y}, ${z}`
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
