import React, { Component } from 'react';

export class App extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    const { counter } = this.state;


    return (
      <div>
        <p>Меняем состояние по кнопке:</p>
        {counter}
        <button onClick={this.handleClick}>+ 1</button>
      </div>
    );
  }
}