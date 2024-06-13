import React, { Component } from 'react';
import MoodTracker from './MoodTracker';
import '../styles.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Quacker Tracker</h1>
          <MoodTracker />
        </header>
      </div>
    );
  }
}

export default App;
