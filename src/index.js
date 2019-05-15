import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from './Button';

import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10;
  }

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>Hello Word</h1>
        <h2>{counter}</h2>
        <Button onClick={() => alert('DefaultProps')} />
        <Button onClick={this.handleClick}>Somar!!!</Button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
