import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: 'App-background-red',
    };
  }

  handleClick = (color) => {
    this.setState({
      background: color,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className={this.state.background}>Hello World!</div>
          <input onClick={() => this.handleClick('App-background-red')} type="button" value="red" />
          <input onClick={() => this.handleClick('App-background-green')} type="button" value="green" />
          <input onClick={() => this.handleClick('App-background-blue')} type="button" value="blue" />
        </header>
      </div>
    );
  }
}

export default App;
