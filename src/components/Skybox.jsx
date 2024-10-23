import React from 'react';
import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

// Import your skybox images
import image1 from '../assets/skybox/1.png'; // Adjust the path as necessary
import image2 from '../assets/skybox/2.png';
import image3 from '../assets/skybox/3.png';
import image4 from '../assets/skybox/4.png';
import image5 from '../assets/skybox/5.png';
import image6 from '../assets/skybox/6.png';

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  // Load the skybox textures and set the scene background
  loader.load(
    [image1, image2, image3, image4, image5, image6],
    (texture) => {
      scene.background = texture; // Set the loaded texture as the scene background
    },
    undefined,
    (error) => {
      console.error("Error loading skybox textures:", error);
    }
  );

  return null; // This component doesn't render anything itself
}

export default SkyBox;
