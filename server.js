var express = require('express');
var app = express();

const PORT = process.env.PORT || 8080;

const Server = class {
  constructor () {
    app.use(express.static('dist'));
    app.use('/img', express.static('img'));
  }

  start () {
    app.listen(PORT);
    console.log('Listening on port: ' + PORT);
  }
};

const server = new Server();
server.start();
