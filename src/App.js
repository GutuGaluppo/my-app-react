import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: 0,
    };
  }

  /*handlePress9 = () => {
    this.setState({
      value: (this.state.value * 10) + 9,
    });
  };*/

  handlePress = n => () => {
    this.setState({
      value: (this.state.value * 10) + n,
    });
  };

  render() {
    return (
      <div className="App">
        CALCULATOR
        <div className='output'>{this.state.value}</div>
        <div className="line simb">
          <div className="flex-item">
            <div className="btn silver">AC</div>
          </div>
          <div className="flex-item">
            <div className="btn silver">±</div>
          </div>
          <div className="flex-item">
            <div className="btn silver">%</div>
          </div>
          <div className="flex-item">
            <div className="btn orange simb">÷</div>
          </div>
        </div>
        <div className="line simb">
          <div className="flex-item">
            <button
              className="btn"
              onClick={this.handlePress(7)}
            >7</button>
          </div>
          <div className="flex-item">
            <button
              className="btn"
              onClick={this.handlePress(8)}
            >8</button>
          </div>
          <div className="flex-item">
            <button
              className="btn"
              onClick={this.handlePress9}
            >9</button>
          </div>
          <div className="flex-item">
            <div className="btn orange simb">x</div>
          </div>
        </div>
        <div className="line simb">
          <div className="flex-item">
            <div className="btn">4</div>
          </div>
          <div className="flex-item">
            <div className="btn">5</div>
          </div>
          <div className="flex-item">
            <div className="btn">6</div>
          </div>
          <div className="flex-item">
            <div className="btn orange simb">-</div>
          </div>
        </div>
        <div className="line simb">
          <div className="flex-item">
            <div className="btn">1</div>
          </div>
          <div className="flex-item">
            <div className="btn">2</div>
          </div>
          <div className="flex-item">
            <div className="btn">3</div>
          </div>
          <div className="flex-item">
            <div className="btn orange">+</div>
          </div>
        </div>
        <div className="line simb">
          <div className="flex-item zero">
            <div className="btn">0</div>
          </div>
          <div className="flex-item">
            <div className="btn">.</div>
          </div>
          <div className="flex-item">
            <div className="btn orange simb">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
