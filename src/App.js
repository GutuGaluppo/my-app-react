import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        GUTU
        <div className="line">
          <div className="flex-item">1</div>
          <div className="flex-item">2</div>
          <div className="flex-item">3</div>
          <div className="flex-item">/</div>
        </div>
        <div className="line">
          <div className="flex-item">4</div>
          <div className="flex-item">5</div>
          <div className="flex-item">6</div>
          <div className="flex-item">x</div>
        </div>
        <div className="line">
          <div className="flex-item">7</div>
          <div className="flex-item">8</div>
          <div className="flex-item">9</div>
          <div className="flex-item">-</div>
        </div>
        <div className="line">
          <div className="flex-item">0</div>
          <div className="flex-item">,</div>
          <div className="flex-item">c</div>
          <div className="flex-item">=</div>
        </div>
      </div>
    );
  }
}

export default App;
