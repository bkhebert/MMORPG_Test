const express = require("express");
const session = require("express-session");
const { connectDB } = require("./db/index");
const path = require('path')
connectDB();
const app = express();
const PORT = `5000`

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "../dist")));

  // Start Local Server
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Listening on port: ${PORT}`);
  });