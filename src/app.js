// require the Express module and initialize the app
const express = require("express");
const app = express();

const routeConfig = require("./config/route-config.js");

routeConfig.init(app);

// pass it to the Node Server
module.exports = app;
