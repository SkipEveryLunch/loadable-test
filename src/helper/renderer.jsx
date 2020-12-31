import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from '../client/pages/Home';

export default () => {
  const renderApp = () => {
    return <Home />;
  };
  const content = renderToString(renderApp());
  return `
  <html>
    <head>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`;
};
