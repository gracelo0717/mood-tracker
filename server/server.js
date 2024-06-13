const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const PORT = 3000;
const app = express();

// parse incoming JSON
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
