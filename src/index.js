import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return (
      <button onClick={this.props.onClick} style={{ bbuttonckground: "#F00" }}>
        {this.props.children}
      </button>
    );
  }
}

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h1>Hello Word</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={() => alert("PropTypes")} />
        <Button onClick={this.handleClick}>Somar!!!</Button>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
