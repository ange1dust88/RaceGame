import React, { useEffect } from 'react';
import BounceBall from './Obstacles/BounceBall';
import Platform from './Obstacles/Platform';
import Spin from './Obstacles/Spin';
import MovingWall from './Obstacles/MovingWall';
import RockSpawner from './Obstacles/RockSpawner';
import BreakingBlocks from './Obstacles/BreakingBlocks';
import InclinedPlane from './Obstacles/InclinedPlane';
import Glass from './Obstacles/Glass';
import Finish from './Obstacles/Finish';


function Map() {
  useEffect(() => {
    console.log('Map loaded');
  }, []);

  return (
    <>
      {/* invisible walls */}
      <Glass pos={[0, 27, -1.55]} args={[12, 60, 0.1]} />
      <Glass pos={[-6, 25, 30]} args={[0.1, 60, 68]} />
      <Glass pos={[6, 25, 45]} args={[0.1, 60, 100]} />
      <Glass pos={[-8, 25, 63.95]} args={[4, 60, 0.1]} />
      <Glass pos={[-10.05, 25, 73]} args={[0.1, 60, 18]} />
      <Glass pos={[0, 25, 82.05]} args={[20, 60, 0.1]} />




      {/* location n1: bouncing balls */}
      <Platform pos={[0, -3, 0]} args={[12, 2, 3]} color ={'springgreen'} />
      <Platform pos={[-2, -3, 2]} args={[1, 0.1, 1]} color ={'red'} />
      <Platform pos={[2, -3, 2]} args={[1, 0.1, 1]} color ={'red'} />

      <Platform pos={[0, -4.5, 5.5]} args={[12, 1, 8]} color ={'yellow'} />
      <BounceBall size={1} color={'tomato'} pos={[0, -2.5, 3]} bouncePower={3.5} />
      <BounceBall size={1} color={'tomato'} pos={[0, -2.5, 5.5]} bouncePower={3.5} />
      <BounceBall size={1} color={'tomato'} pos={[0, -2.5, 8]} bouncePower={2.5} />

      <BounceBall size={1} color={'tomato'} pos={[4, -2.5, 3]} bouncePower={3.5} />
      <BounceBall size={1} color={'tomato'} pos={[4, -2.5, 5.5]} bouncePower={3.5} />
      <BounceBall size={1} color={'tomato'} pos={[4, -2.5, 8]} bouncePower={2.5} />

      <BounceBall size={1} color={'tomato'} pos={[-4, -2.5, 3]} bouncePower={3.5} /> 
      <BounceBall size={1} color={'tomato'} pos={[-4, -2.5, 5.5]} bouncePower={3.5} />
      <BounceBall size={1} color={'tomato'} pos={[-4, -2.5, 8]} bouncePower={2.5} />


      {/*   location n2: Rocks*/}
      <Platform pos={[0, -3, 12]} args={[12, 2, 5]} color ={'springgreen'} />
      <Platform pos={[0, -3, 16]} args={[12, 2, 3]} color ={'yellow'} />
      <Platform pos={[0, -3, 19]} args={[12, 1, 3]} color ={'tomato'} />
      <Platform pos={[0, -1, 14.5]} args={[4, 2, 0.2]} color ={'grey'} />
      <Platform pos={[4.5, -1, 14.5]} args={[3, 2, 0.2]} color ={'grey'} />
      <Platform pos={[-4.5, -1, 14.5]} args={[3, 2, 0.2]} color ={'grey'} />
      <InclinedPlane  position={[-4.125, -0.3, 30.2]} xRotation={10} yRotation={0} width={3.75} depth={20} color="gray" />
      <InclinedPlane  position={[-2.125, -0.3, 30.2]} xRotation={10} yRotation={0} width={0.25} depth={20} color="black" />
      <InclinedPlane  position={[0, -0.3, 30.2]} xRotation={10} yRotation={0} width={4} depth={20} color="gray" />
      <InclinedPlane  position={[2.125, -0.3, 30.2]} xRotation={10} yRotation={0} width={0.25} depth={20} color="black" />
      <InclinedPlane  position={[4.125, -0.3, 30.2]} xRotation={10} yRotation={0} width={3.75} depth={20} color="gray" />
      <RockSpawner time = {4} pos ={[0,10,37]} rockTime ={7}/>
      <RockSpawner time = {4.5} pos ={[5,10,37]} rockTime ={7}/>
      <RockSpawner time = {3.5} pos ={[-5,10,37]} rockTime ={7}/>
      <RockSpawner time = {3.6} pos ={[2.5,10,37]} rockTime ={7}/>
      <RockSpawner time = {4.6} pos ={[-2.5,10,37]} rockTime ={7}/>
 

      {/*   location n3: Spin */}
      <Platform pos={[0, 1.1, 43]} args={[12, 2, 6]} color ={'springgreen'} />
      <Platform pos={[0, -0, 52]} args={[12, 2, 12]} color ={'yellow'} />
      <Spin rotSpeed ={6} size={3} color={'tomato'} pos={[-4, 3, 48]} bouncePower={5}/>
      <Spin rotSpeed ={5.5} size={3} color={'tomato'} pos={[-4, 3, 52]} bouncePower={5}/>
      <Spin rotSpeed ={6.5} size={3} color={'tomato'} pos={[-4, 3, 56]} bouncePower={5}/>
      <Spin rotSpeed ={6} size={3} color={'tomato'} pos={[4, 3, 48]} bouncePower={5}/>
      <Spin rotSpeed ={5.5} size={3} color={'tomato'} pos={[4, 3, 52]} bouncePower={5}/>
      <Spin rotSpeed ={6.5} size={3} color={'tomato'} pos={[4, 3, 56]} bouncePower={5}/>
      <Platform pos={[0, 1.5, 61]} args={[12, 2, 6]} color ={'springgreen'} />
     

      {/* location n4: mountain first etap*/}
      <Platform pos={[-2, 1.5, 65]}args={[16, 2, 2]} color ={'yellow'} />
      <Platform pos={[-8, 2, 74]}args={[4, 1, 16]} color ={'tomato'} />

      <Platform pos={[0, 3, 74]} args={[12, 12, 16]} color ={'gray'} />
      <Platform pos={[3, 3, 65]} args={[1, 0.2, 2]} color ={'gray'} />
      <Platform pos={[1, 3.5, 65]} args={[1, 0.2, 2]} color ={'gray'} />
      <Platform pos={[-1, 4, 65]} args={[1, 0.2, 2]} color ={'gray'} />
      <Platform pos={[-3, 4.5, 65]} args={[1, 0.2, 2]} color ={'gray'} />
      <Platform pos={[-5, 5, 65]} args={[1, 0.2, 2]} color ={'gray'} />

      <InclinedPlane  position={[-6.5, 6.6, 68]} xRotation={20} yRotation={90} width={8} depth={1} color="gray" />

      {/* mountain second etap*/}
      <Platform pos={[0, 15, 73.5]} args={[10, 12, 9]} color ={'gray'} />

      <Platform pos={[-4.2, 10.25, 68]} args={[1.2, 2.4, 2.4]} color ={'gray'} />
      <MovingWall pos={[-3, 10.25, 74]} args={[1.2, 2.4, 1.2]} speed={1} color = {'lightpink'} startPosZ={-7.45} endPosZ={-5.5} />
      <Platform pos={[-1.8, 10.25, 68]} args={[1.2, 2.4, 2.4]} color ={'gray'} />
      <MovingWall pos={[-0.6, 10.25, 74]} args={[1.2, 2.4, 1.2]} speed={1.2} color = {'cyan'} startPosZ={-7.45} endPosZ={-5.5} />
      <Platform pos={[0.6, 10.25, 68]} args={[1.2, 2.4, 2.4]} color ={'gray'} />
      <MovingWall pos={[1.8, 10.25, 74]} args={[1.2, 2.4, 1.2]} speed={1.3} color = {'purple'} startPosZ={-7.45} endPosZ={-5.5} />
      <Platform pos={[3, 10.25, 68]} args={[1.2, 2.4, 2.4]} color ={'gray'} />

      {/*  mountain third etap*/}
      <Platform pos={[5.5, 9.7, 70.5]} args={[1, 0.2, 0.2]} color ={'gray'} />
      <Platform pos={[5.5, 10.4, 71.2]} args={[1, 0.2, 0.2]} color ={'gray'} />
      <Platform pos={[5.5, 11.1, 71.9]} args={[1, 0.2, 0.2]} color ={'gray'} />
      <Platform pos={[5.5, 11.8, 72.6]} args={[1, 0.2, 0.2]} color ={'gray'} />
      <Platform pos={[5.5, 12.5, 73.3]} args={[1, 0.2, 0.2]} color ={'gray'} />
      <Platform pos={[5.5, 13.2, 74]} args={[1, 0.2, 0.2]} color ={'gray'} />
      <Platform pos={[5.5, 13.9, 74.7]} args={[1, 0.2, 0.2]} color ={'gray'} />
      <Platform pos={[5.5, 14.6, 75.4]} args={[1, 0.2,0.2]} color ={'gray'} />
      <Platform pos={[5.5, 15.3, 76.1]} args={[1, 0.2,0.2]} color ={'gray'} />
      <Platform pos={[5.5, 16, 76.8]} args={[1, 0.2,0.2]} color ={'gray'} />
      <Platform pos={[5.5, 16.7, 77.5]} args={[1, 0.2,0.4]} color ={'gray'} />
      

      <Platform pos={[0, 17, 79]} args={[10, 0.2,2]} color ={'red'} />
      <Spin rotSpeed ={6} size={2} color={'tomato'} pos={[2.5, 17.5, 79]} bouncePower={6.5} spinDirection = {-1}/>
      <Spin rotSpeed ={6} size={2} color={'tomato'} pos={[0, 17.5, 79]} bouncePower={6.5}/>
      <Spin rotSpeed ={6} size={2} color={'tomato'} pos={[-2.5, 17.5, 79]} bouncePower={6.5} spinDirection = {-1}/>

      <Platform pos={[-5.5, 17.4, 77.8]} args={[1, 0.2,0.3]} color ={'gray'} />
      <Platform pos={[-5.5, 18.1, 77.2]} args={[1, 0.2,0.3]} color ={'gray'} />
      <Platform pos={[-5.5, 18.8, 76.6]} args={[1, 0.2,0.3]} color ={'gray'} />
      <Platform pos={[-5.5, 19.5, 76]} args={[1, 0.2,0.3]} color ={'gray'} />
      <Platform pos={[-5.5, 20.2, 75.4]} args={[1, 0.2,0.3]} color ={'gray'} />
      
      {/* FINISH  */}
      {/* KEY: R L L R  */}
      <BreakingBlocks pos = {[-1, 21, 67.5]} size = {[0.8, 0.8,0.15,32]} breakable ={true} color ={'cyan'} />
      <BreakingBlocks pos = {[1, 21, 67.5]} size = {[0.8, 0.8,0.15,32]} breakable ={false} color ={'cyan'}/> 

      <BreakingBlocks pos = {[-1, 21, 65.5]} size = {[0.8, 0.8,0.15,32]} breakable ={false} color ={'cyan'} />
      <BreakingBlocks pos = {[1, 21, 65.5]} size = {[0.8, 0.8,0.15,32]} breakable ={true} color ={'cyan'}/> 

      <BreakingBlocks pos = {[-1, 21, 63.5]} size = {[0.8, 0.8,0.15,32]} breakable ={false} color ={'cyan'} />
      <BreakingBlocks pos = {[1, 21, 63.5]} size = {[0.8, 0.8,0.15,32]} breakable ={true} color ={'cyan'}/> 

      <BreakingBlocks pos = {[-1, 21, 61.5]} size = {[0.8, 0.8,0.15,32]} breakable ={true} color ={'cyan'} />
      <BreakingBlocks pos = {[1, 21, 61.5]} size = {[0.8, 0.8,0.15,32]} breakable ={false} color ={'cyan'}/> 


      <BreakingBlocks pos = {[0, 21, 58.5]} size = {[2, 2 ,0.15,32]} breakable ={false} color ={'yellow'}/> 

      <Finish  pos = {[0, 22, 58.5]}/>




      {/*<BounceBall size={1} color={'tomato'} pos={[0, -1, 3]} bouncePower={5.5} />
      <BounceBall size={1} coDlor={'tomato'} pos={[0, -1, 6]} bouncePower={3.5} />
      <Spin rotSpeed ={6} size={3} color={'tomato'} pos={[3, -1.5, 3]} bouncePower={5}/>
      <RockSpawner time = {5} pos = {[9,5,9]}/>ф
      <BreakingBlocks pos = {[3, -1.5, 9]} size = {[0.8, 0.8,0.15,32]} breakable ={true} color ={'cyan'} />
      <BreakingBlocks pos = {[1, -1.5, 9]} size = {[0.8, 0.8,0.15,32]} breakable ={false} color ={'cyan'}/> */}



        

    </>
  );
}

export default Map;
