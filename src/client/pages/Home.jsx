import React, { useState, useEffect } from 'react';
import loadable from '@loadable/component';
const TestLoadable = loadable(() => import('../components/TestLoad'));

const Home = () => {
  console.log('hi');
  return (
    <div>
      <h1>Hello world</h1>
      <TestLoadable />
    </div>
  );
};
export default Home;
