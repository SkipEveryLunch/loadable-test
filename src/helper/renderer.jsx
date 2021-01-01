import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import Home from '../client/pages/Home';
import path from 'path';

const statsFile = path.resolve(__dirname, './loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile });

export default () => {
  const renderApp = () => {
    return <Home />;
  };
  const jsx = extractor.collectChunks(renderApp());
  const content = renderToString(jsx);
  const linkTag = extractor.getLinkTags();
  const styleTag = extractor.getStyleTags();
  const scriptTags = extractor.getScriptTags().replace(/async/gi, 'defer');
  return `
  <html>
    <head>
      ${linkTag}
      ${styleTag}
    </head>
    <body>
      ${scriptTags}
      <div id="root">${content}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`;
};
