import React, { useState } from 'react';
const TestLoadable = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
};
export default TestLoadable;
