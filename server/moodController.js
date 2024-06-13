const Mood = require('./moodModel');

const moodController = {
  createMood: async (req, res, next) => {
    try {
      const { mood, description } = req.body;
      const newMood = new Mood({ mood, description });
      await newMood.save();
      res.locals.mood = newMood;
      return next();
    } catch (err) {
      return next({
        log: 'Error in moodController.createMood',
        status: 500,
        message: { err: 'An error occurred while creating mood' },
      });
    }
  },
};
module.exports = moodController;
