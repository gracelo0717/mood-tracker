import React, { useState } from 'react';

const MoodSlider = ({ mood, onMoodChange }) => {
  return (
    <div className='MoodSlider'>
      <input
        type='range'
        min='1'
        max='10'
        value={mood}
        onChange={onMoodChange}
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
