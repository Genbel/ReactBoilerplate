import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import style from '../assets/stylesheets/sass/global.scss';

import App from './components/app';

ReactDOM.render( <App /> ,document.getElementById('root') );