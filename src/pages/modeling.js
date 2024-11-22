import React, {  useRef, useEffect } from 'react';
import { Canvas, useThree, extend, useFrame } from 'react-three-fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useLoader } from '@react-three/fiber';
import styled from 'styled-components';
import weldment from '../images/weldment.png'
import assembly from '../images/assembly.png'
import head from '../images/Headsheet.png'
import nozzle from '../images/Nozzlesheet.png'
import shell from '../images/Shellsheet.png'
import supports from '../images/Supportsheet.png'
import pic from '../images/PV MDP obj.obj';
import { FcEngineering } from "react-icons/fc";
import * as THREE from 'three'; // Import Three.js library
import { FaBars } from "react-icons/fa";
import pv from '../images/pv.png';
import imagePath3 from '../images/fo2.jpg';
import imagePath2 from '../images/shell.jpg'
import imagePath1 from '../images/tophead.png'
import { useState } from 'react';
import annotation from '../images/annotation.png';
import { Nav, NavbarContainer, NavLogo, LogoIcon, MobileIcon } from '../components/Navbar/NavbarElements.js'; 
extend({ OrbitControls });

function Model() {
  const objModel = useLoader(OBJLoader, pic);
  const [annotations, setAnnotations] = React.useState([]);
  const [annotation, setAnnotation] = React.useState({});
  

  // Define colors for each part
  const colors = [0xff0000, 0x00ff00, 0x0000ff]; // Red, Green, Blue

  // Traverse through the model's children and assign colors to different parts
  objModel.traverse((child, index) => {
    
  });

  objModel.rotation.x = Math.PI / 2;
 
  return <primitive object={objModel} position={[1, 1, 1]} />;
}

function Controls() {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  useFrame(() => controlsRef.current.update());
  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
}

function Annotation({ position, label , camera }) {
  const [screenPosition, setScreenPosition] = useState({ x: 0, y: 0 });

  // Calculate screen coordinates for the annotation
 
 

  return (
    <div style={{ position: 'absolute', left: screenPosition.x, top: screenPosition.y, transform: 'translate(-50%, -50%)', color: 'white' }}>
      {label}
    </div>
  );
}

const Modelingg=()=> {
  const [hopValue, setHopValue] = useState(0);
  const [direction, setDirection] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (hopValue >= 10) {
        setDirection(-1);
      } else if (hopValue <= 0) {
        setDirection(1);
      }
      setHopValue(hopValue + direction);
    }, 100);
    return () => clearInterval(interval);
  }, [hopValue, direction]);
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };



 
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <LogoIcon> 
              <FcEngineering />
            </LogoIcon>
            Pressure Vessel
          </NavLogo>
          
         
         
        </NavbarContainer>
      </Nav>
      <div style={{ padding: '20px' , backgroundColor:'black', height: '500vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h style={{color:'white', fontSize: '1.6em', fontWeight: 'bold', marginBottom: '20px' }}> 3D model of our vertical pressure vessel. 
        </h>
        <p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}> This pressure vessel was designed using SolidWorks. </p>
        <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: 'black' }}>
          
          <Canvas style={{ width: '100%', height:' 100%' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <Controls />
          </Canvas>
        </div> 
   
        <div style={{ backgroundColor: 'black', height: '200vh', width: '100%', marginTop: '50px' }}> 
      <h3 style={{ color: 'white', fontSize: '1.6em', fontWeight: 'bold', marginBottom: '20px' }}>Drawing sheets of our vertical pressure vessel </h3>
      <p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}> The vertical pressure vessel below was designed by the mechanical engineers of this project. In order to dive more into the details of the dimensions and sheet drawings,<strong style={{ color: '#FFA500' }}> click the pressure vessel picture.</strong></p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => setButtonClicked(!isButtonClicked)} style={{ border: 'none', background: 'none', padding: '10px', cursor: 'pointer' }}>
          <img src={annotation} alt="Your description" style={{ width: '400px', height: 'auto', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} />
        </button>
{isButtonClicked && (
  <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
  <select 
    onChange={(e) => setButtonClicked(e.target.value)} 
    style={{ 
      padding: '10px', 
      fontSize: '1.2em', 
      margin: '5px 0', 
      borderRadius: '5px', 
      color: 'white', 
      background:'black',
      transition: 'all 0.3s ease', 
      border: 'none',
      outline: 'none',
      letterSpacing: '1px',
      width: '100%' // Add this line
    }}
  >
    <option value="">Explore sheets</option>
    <option value="head">Head</option>
    <option value="nozzle">Nozzle rings</option>
    <option value="shell">Shell</option>
    <option value="supports">Supports</option>
    <option value="assembly">Assembly</option>
    <option value="weldment">Weldment</option>
  </select>
  </div>
)}
</div>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '-1px', marginTop: '20px' }}>
  {isButtonClicked === 'head' && <img src={head} alt="Head" style={{ width: '100%' }} />}
  {isButtonClicked === 'nozzle' && <img src={nozzle} alt="Nozzle" style={{ width: '100%' }} />} // Add style here
  {isButtonClicked === 'shell' && <img src={shell} alt="Shell" style={{ width: '100%' }} />} // Add style here
  {isButtonClicked === 'supports' && <img src={supports} alt="Supports" style={{ width: '100%' }} />} // Add style here
  {isButtonClicked === 'assembly' && <img src={assembly} alt='Assembly' style={{ width: '100%' }} />} // Add style here
  {isButtonClicked === 'weldment' && <img src={weldment} alt='Weldment' style={{ width: '100%' }} />} // Add style here
</div>
        </div>
 
      
        </div>

    </>
  );}

  export default Modelingg;