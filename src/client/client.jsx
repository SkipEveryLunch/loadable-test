import React from 'react';
import ReactDom from 'react-dom';
import Home from './pages/Home';
import { loadableReady } from '@loadable/component';

loadableReady(() => {
  ReactDom.hydrate(<Home />, document.querySelector('#root'));
});
