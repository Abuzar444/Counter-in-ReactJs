import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 style={{color: `${count > 0 ? 'green' : count < 0 ? 'red' : '#555'}`}}>{count}</h1>
      <div className='btn-group'>
        <button className='btn' onClick={() => setCount(count - 1)}>Decrease</button>
        <button className='btn' onClick={() => setCount(0)}>Reset</button>
        <button className='btn' onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  )
}

export default App