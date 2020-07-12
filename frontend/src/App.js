import React from 'react';
import logo from './rocket.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{
          fontSize: "30px",
          marginTop: '50px'
        }}>
          Ultimate VScode Setup
        </p>
      </header>
    </div>
  );
}

export default App;
