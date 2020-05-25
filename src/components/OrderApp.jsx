import React, { Component } from 'react';

import { OrderList } from './OrderList';
import { OrderForm } from './OrderForm';

export class OrderApp extends Component {
  state = {
    orders: [
      {
        id: 1,
        number: 42130,
        // date: new Date("2020-05-19 20:20"),
        // deadline: new Date("2020-06-19 20:19"),
        // ipdated: new Date("2020-06-19 20:22"),
        title: 'title15',
        priority: 'Аварийные',
        kindOfWork: 'Нет освещения в квартире',
        // organization: 'Жилищник Басманного района / Усчасток №1',
        // customer: 'Жилищник Басманного района',
        // performer: 'Инспектор жилищника 2',
        // text: '',
      },
      {
        id: 2,
        number: 42129,
        title: 'title8',
        priority: 'Аварийные',
        kindOfWork: 'Нет освещения в квартире',
      },
      {
        id: 3,
        number: 42128,
        title: 'title4',
        priority: 'Аварийные',
        kindOfWork: 'Нет освещения в квартире',
      },
      {
        id: 4,
        number: 42127,
        title: 'title7',
        priority: 'Аварийные',
        kindOfWork: 'Нет освещения в квартире',
      },
      {
        id: 5,
        number: 42126,
        title: 'title1',
        priority: 'Аварийные',
        kindOfWork: 'Нет освещения в квартире',
      },
    ],
  }

  render() {
    const { orders } = this.state;
    
    return (
      <div>
        <OrderList orders={orders} />
        {/* <OrderForm /> */}
      </div>
    );
  }
}