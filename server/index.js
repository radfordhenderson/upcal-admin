'use strict';

var path = require('path');

var WebServer = require('./WebServer');
const indexRoute = require('./routes/index');
const apiRoutes = require('./apiRoutes/index');
const C = require('./Constants');

// Mount static "public" directory
WebServer.addStatic('/', path.join(C.topDir, 'public'));

// Mount static "dist" directory
WebServer.addStatic('/', path.join(C.topDir, 'dist'));

WebServer.addRoute(indexRoute);

apiRoutes.forEach(WebServer.addApiRoute);

module.exports = {
  WebServer
};