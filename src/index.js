import React from 'react';
import ReactDom from 'react-dom';

const pageTitle = <h1 className="page-title">Заголовок страницы JSX</h1>;

ReactDom.render(
  pageTitle,
  document.getElementById('root'),
);