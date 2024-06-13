import React, { useState } from 'react';

const MoodSlider = () => {
  const [mood, setMood] = useState(5);
  const moodChanger = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setMood(value);
    }
  };

  return (
    <div className='MoodSlider'>
      <input
        type='range'
        min='1'
        max='10'
        value={mood}
        onChange={moodChanger}
        step='1'
        className='slider'
      />
      <p>
        <b>Mood Score: {mood}</b>
      </p>
    </div>
  );
};

export default MoodSlider;
