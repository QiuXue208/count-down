import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountDown from './CountDown';


ReactDOM.render(
    <CountDown startCount={10}>
      {count => count > 0 ? count : 'hey!'}
    </CountDown>,
  document.getElementById('root')
);
