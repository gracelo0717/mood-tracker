const express = require('express');
const mongoose = require('mongoose');
const moodController = require('./moodController');
const Mood = require('./moodModel');

const PORT = 3000;
const app = express();

// create an instance of an express Router called moodRouter
const moodRouter = express.Router();

// connect to mongoDB database: atlas
mongoose.connect(
  'mongodb+srv://gracelo0717:C4gVMkOTALCGFXTM@cluster.hjrryfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// parse URL encoded data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON
app.use(express.json());

moodRouter.post('/', moodController.createMood, (req, res) => {
  return res.status(201).json(res.locals.mood);
});

moodRouter.get('/', (req, res) => {
  Mood.find()
    .then((moods) => res.status(200).json(moods))
    .catch((error) => res.status(500).json({ error: 'Failed to fetch moods' }));
});

app.use('/moods', moodRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
