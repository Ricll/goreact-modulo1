import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Button extends Component {
  render() {
    return <a href="">Salvar</a>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Word</h1>
        <Button />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
