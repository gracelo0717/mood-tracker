import React, { useState } from 'react';
import MoodSlider from './MoodSlider';

const MoodForm = () => {
  const [mood, setMood] = useState(5);
  const [moodDescription, setMoodDescription] = useState('');

  const onMoodChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setMood(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Mood submitted:', mood);
    console.log('Mood description:', moodDescription);

    setMood(5);
    setMoodDescription('');
  };

  const onMoodDescriptionChange = (event) => {
    setMoodDescription(event.target.value);
  };

  return (
    <div className='MoodForm'>
      <form onSubmit={handleSubmit}>
        <MoodSlider mood={mood} onMoodChange={onMoodChange} />
        <input
          type='text'
          className='moodInput'
          placeholder='How are you feeling?'
          onChange={onMoodDescriptionChange}
        />
        <button type='submit' className='moodBtn'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MoodForm;
