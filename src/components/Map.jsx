import React, { useEffect } from 'react';
import BounceBall from './Obstacles/BounceBall';
import Platform from './Obstacles/Platform';
import Spin from './Obstacles/Spin';
import MovingWall from './Obstacles/MovingWall';
import RockSpawner from './Obstacles/RockSpawner';
import BreakingBlocks from './Obstacles/BreakingBlocks';

function Map() {
  useEffect(() => {
    console.log('Map loaded');
  }, []);

  return (
    <>
  
      <Platform pos={[0, -1, 0]} args={[30, 1, 30]} color ={'springgreen'} />
      <Platform pos={[3, -1, 0]} args={[12, 3, 3]} color ={'cyan'} /> 
      <BounceBall size={1} color={'tomato'} pos={[0, 1, 3]} bouncePower={5.5} />
      <BounceBall size={1} color={'tomato'} pos={[0, 1, 6]} bouncePower={3.5} />
      <Spin rotSpeed ={6} size={3} color={'tomato'} pos={[3, 1, 3]} bouncePower={5}/>
      <RockSpawner time = {5} pos = {[9,5,9]}/>
      <BreakingBlocks pos = {[3, 0.5, 9]} size = {[0.8, 0.8,0.15,32]} breakable ={true} color ={'cyan'} />
      <BreakingBlocks pos = {[1, 0.5, 9]} size = {[0.8, 0.8,0.15,32]} breakable ={false} color ={'cyan'}/>



      {/* mooving wallz */}

      <Platform pos={[0,  -0.5, -7]} args={[2.4, 0.6, 8]} color ={'black'}/> {/* floor */}
      <Platform pos={[-0.6,  0.8, -4.2]} args={[1.2, 2, 0.8]} color ={'gray'}/> 
      <MovingWall pos={[0, 0.8, -5]} args={[1.2, 2, 0.8]} speed={1} color = {'yellow'} />
      <Platform pos={[-0.6,  0.8, -5.8]} args={[1.2, 2, 0.8]} color ={'gray'}/> 
      <MovingWall pos={[0, 0.8, -6.6]} args={[1.2, 2, 0.8]} speed={1} color = {'cyan'} />
      <Platform pos={[-0.6,  0.8, -7.4]} args={[1.2, 2, 0.8]} color ={'gray'}/> 
      <MovingWall pos={[0, 0.8, -8.2]} args={[1.2, 2, 0.8]} speed={1} color = {'lightpink'} />
      <Platform pos={[-0.6,  0.8, -9]} args={[1.2, 2, 0.8]} color ={'gray'}/> 


    </>
  );
}

export default Map;
