import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundClass: 'red',
    };
  }

  handleClick = (color) => {
    this.setState({
      backgroundClass: color,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className={this.state.backgroundClass}>Hello World!</div>
          <button onClick={() => this.handleClick('red')}> red </button>
          <button onClick={() => this.handleClick('green')}>green</button>
          <button onClick={() => this.handleClick('blue')}>blue</button>
        </header>
      </div>
    );
  }
}

export default App;
