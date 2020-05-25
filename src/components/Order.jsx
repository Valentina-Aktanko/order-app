import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Order extends Component {
  static propTypes = {
    order: PropTypes.object.isRequired,
  }

  state = {
    title: '',
    priority: '',
    kindOfWork: '',
  }

  render() {
    const { order } = this.props;
    console.log(order.id);

    return(
      <li>
        <p>{order.number}</p>
        <p>{order.title}</p>
        <p>{order.priority}</p>
        <p>{order.kindOfWork}</p>
      </li>
    );
    
  }
}