const express = require("express");
const { createServer } = require("http");
const app = express();

const port = process.env.PORT || 3500; // Get environment variable PORT from process.yml configuration.

var httpServer = createServer(app);

httpServer.listen(port, () => {
  console.log("Running HTTP on ", port);
});
