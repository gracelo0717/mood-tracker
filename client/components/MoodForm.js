import React from 'react';
import MoodSlider from './MoodSlider';

export const MoodForm = () => {
  return (
    <>
      <form className='MoodForm'>
        <input
          type='text'
          className='moodInput'
          placeholder='How are you feeling?'
        />
        <button type='submit' className='moodBtn' />
      </form>
      <MoodSlider />
    </>
  );
};
