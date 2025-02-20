'use client';

import React, { useState } from 'react';
import './globals.css';

const Counter = () => {

  // set initial value to 0
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <button onClick={() => setCount(count + 1)}>
        Click Me:
        <p>{count}</p>
      </button>
    </div>
  )
}
export default Counter
