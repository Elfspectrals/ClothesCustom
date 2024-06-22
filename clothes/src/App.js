// App.js
import React, { useState } from 'react';
import Model from './clothes1/Scene'; // Adjust the path as necessary
import './App.css';

const App = () => {
  const [color, setColor] = useState('blue'); // Initial color set to blue

  return (
    <div>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} // Update color based on input
      />
      <Model color={color}/>
    </div>
  );
};

export default App;