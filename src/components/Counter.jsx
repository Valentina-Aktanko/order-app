import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Counter extends Component {
  static propTypes = {
    initial: PropTypes.number,
  }

  static defaultProps = {
    initial: 0,
  }

  state = {
    counter: this.props.initial,
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