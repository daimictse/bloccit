// require the Express module and initialize the app
const express = require("express");
const app = express();

const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");

appConfig.init();
routeConfig.init(app);

// pass it to the Node Server
module.exports = app;
