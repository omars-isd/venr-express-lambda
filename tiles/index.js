var express = require('express');
var app = express();

app.get('/{x}/{y}/{z}', function (req, res) {

  res.send({
    "Output": `${x}, ${y}, ${z}`
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
