import React, { useEffect } from 'react';
import BounceBall from './Obstacles/BounceBall';
import Platform from './Obstacles/Platform';
import Spin from './Obstacles/Spin';

function Map() {
  useEffect(() => {
    console.log('Map loaded');
  }, []);

  return (
    <>
  
      <Platform pos={[0, -1, 0]} args={[30, 1, 30]} />
      <Platform pos={[3, -1, 0]} args={[12, 3, 3]} /> 
      <BounceBall size={1} color={'tomato'} pos={[0, 1, 3]} bouncePower={5.5} />
      <BounceBall size={1} color={'tomato'} pos={[0, 1, 6]} bouncePower={3.5} />
      <Spin rotSpeed ={6} size={3} color={'tomato'} pos={[3, 1, 3]} bouncePower={5}/>
    </>
  );
}

export default Map;
