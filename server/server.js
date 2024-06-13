const express = require('express');
const mongoose = require('mongoose');
const moodController = require('./moodController');

const PORT = 3000;
const app = express();

// create an instance of an express Router called moodRouter
const moodRouter = express.Router();

// connect to mongoDB database: atlas
mongoose.connect(
  'mongodb+srv://gracelo0717:C4gVMkOTALCGFXTM@cluster.hjrryfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// parse URL encoded data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON
app.use(express.json());

// POST: to get a mood
moodRouter.post('/', moodController.createMood, (req, res) => {
  return res.status(200).json(res.locals.student);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
