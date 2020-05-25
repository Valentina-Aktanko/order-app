import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Order } from './Order';

export class OrderList extends Component {
  static propTypes = {
    orders: PropTypes.array.isRequired,
  }

  render() {
    const orders = this.props;

    return (
      <div>
        <ul>
          {orders.orders.map((order, idx) => <Order key={idx} order={order} />)}  
        </ul>
      </div>
    )
  }
}