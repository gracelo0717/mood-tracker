const Mood = require('./moodModel');

const moodController = () => {
  const createMood = async (req, res, next) => {
    try {
      const { mood, description } = req.body;
      const newMood = new Mood({ mood, description });
      await newMood.save();
      res.status(201).json(newMood);
      return next();
    } catch (err) {
      return next({
        log: 'Error in createMood.js',
        status: 500,
        message: { err: 'An error occurred in creating mood' },
      });
    }
  };
};
