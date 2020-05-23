import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    counter: 0,
  };

  interval = null;

  handleClick = (event) => {
    const operation = +event.target.dataset.operation;
    
    this.setState((prevState) => ({
      counter: prevState.counter + operation,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('Fired!');
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <p>Меняем состояние по кнопке:</p>
        <button data-operation="-1" onClick={this.handleClick}>- 1</button>
        {counter}
        <button data-operation="+1" onClick={this.handleClick}>+ 1</button>
      </div>
    );
  }
}