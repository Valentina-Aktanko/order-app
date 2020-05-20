import React from 'react';
import ReactDom from 'react-dom';

const pageTitle = React.createElement(
  'h1',
  {className: 'page-title'},
  'Заголовок страницы',
);

ReactDom.render(
  pageTitle,
  document.getElementById('root'),
);