import React, { useState } from 'react';

const MoodSlider = ({ mood, onMoodChange }) => {
  const moodEmojis = [
    '😞',
    '😟',
    '😕',
    '😐',
    '🙂',
    '😀',
    '😃',
    '😄',
    '😁',
    '😍',
  ];

  return (
    <div className='MoodSlider'>
      <div className='emoji'>
        {moodEmojis.map((emoji, index) => (
          <span key={index} className='emoji'>
            {emoji}
          </span>
        ))}
      </div>
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
