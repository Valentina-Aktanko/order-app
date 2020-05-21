import React from 'react';
import ReactDom from 'react-dom';

const orders = ['Order1', 'Order2', 'Order3'];

const Order = (props) => <div>{props.title}</div>;
const OrderList = (props) => {
  return props.orders.map((title) => <Order title={title} />);
}


ReactDom.render(
  <OrderList orders={orders}/>,
  document.getElementById('root'),
);