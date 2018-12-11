var express = require('express'),
  app = express(),
  port = process.env.PORT || 8001,
  routes = require('./src/route');

routes(app);
app.listen(port);

