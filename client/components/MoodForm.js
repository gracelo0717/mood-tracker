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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Mood submitted:', mood);
    console.log('Mood description:', moodDescription);

    try {
      const URI = 'http://localhost:3000/moods';
      const response = await fetch(URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mood, description: moodDescription }),
      });
      const data = await response.json();
      console.log('This is the data from server: ', data);

      setMood(5);
      setMoodDescription('');
    } catch (error) {
      console.error('Error in handleSubmit', error);
    }
  };

  const onMoodDescriptionChange = (event) => {
    setMoodDescription(event.target.value);
  };

  return (
    <div className='MoodForm'>
      <form onSubmit={handleSubmit} className='form'>
        <MoodSlider mood={mood} onMoodChange={onMoodChange} />
        <input
          type='text'
          className='moodInput'
          placeholder='How are you feeling?'
          onChange={onMoodDescriptionChange}
        />
        <div className='btn'>
          <button type='submit' className='btn1'>
            Submit
          </button>
          <button type='submit' className='btn2'>
            Mood History
          </button>
        </div>
      </form>
    </div>
  );
};

export default MoodForm;
