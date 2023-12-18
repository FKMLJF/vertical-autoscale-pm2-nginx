const express = require("express");
const { createServer } = require("http");
const app = express();

const port = process.env.PORT || 3500; // Get environment variable PORT from process.yml configuration.

var httpServer = createServer(app);

app.get('/', (req, res) => {
  setTimeout(() => {
  res.send( Math.floor(Math.random() * 2));
}, "1000");
})

httpServer.listen(port, () => {
  console.log("Running HTTP on ", port);
});
