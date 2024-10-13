import React, { useState, useEffect } from 'react';
import Rock from './Rock'; 

function RockSpawner({ time, pos }) {
  const [rocks, setRocks] = useState([]); 

  useEffect(() => {
    const interval = setInterval(() => {
      setRocks((prevRocks) => [
        ...prevRocks,
        <Rock key={prevRocks.length} pos={pos} />, 
      ]);
    }, time * 1000); 

    return () => clearInterval(interval); 
  }, [time, pos]);

  return <>{rocks}</>; 
}

export default RockSpawner;
