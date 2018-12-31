var express = require('express');
var app = express();

app.get('/', function (req, res) {
  try {
    const x = Number.parseInt(req.query["x"]);
    const y = Number.parseInt(req.query["y"]);
    const z = Number.parseInt(req.query["z"]);

    if (x == null || y == null || z == null) {
      throw new Error("Invalid parameters. Set x, y, and z to valid values.");
    }

    res.send({
      "Output": `${x}, ${y}, ${z}`
    });
  }
  catch (err) {
    res.status(500).send(err)
    return;
  }
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
