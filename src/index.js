import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/Layout'
import FastClick from 'fastclick'; 

FastClick.attach(document.body);

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);
