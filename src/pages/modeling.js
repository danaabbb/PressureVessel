import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useThree, extend, useFrame } from 'react-three-fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useLoader } from '@react-three/fiber';
import styled from 'styled-components';
import { FcEngineering } from "react-icons/fc";
import { Nav, NavbarContainer, NavLogo, LogoIcon } from '../components/Navbar/NavbarElements.js';
import weldment from '../images/weldment.png';
import assembly from '../images/assembly.png';
import head from '../images/Headsheet.png';
import nozzle from '../images/Nozzlesheet.png';
import shell from '../images/Shellsheet.png';
import supports from '../images/Supportsheet.png';
import pic from '../images/PV MDP obj.obj';
import annotation from '../images/annotation.png';

extend({ OrbitControls });

const Container = styled.div`
  padding: 20px;
  background-color: black;
  height: 500vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 1.6em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #f9f9f9;
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 30px;
  margin-left: 30px;
`;

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const DrawingContainer = styled.div`
  background-color: black;
  height: 200vh;
  width: 100%;
  margin-top: 50px;
`;

const DrawingTitle = styled.h3`
  color: white;
  font-size: 1.6em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DrawingParagraph = styled.p`
  color: #f9f9f9;
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 30px;
  margin-left: 30px;
`;

const DrawingButton = styled.button`
  border: none;
  background: none;
  padding: 10px;
  cursor: pointer;
`;

const DrawingImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const DrawingSelect = styled.select`
  padding: 10px;
  font-size: 1.2em;
  margin: 5px 0;
  border-radius: 5px;
  color: white;
  background: black;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  letter-spacing: 1px;
  width: 100%;
`;

const DrawingImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -1px;
  margin-top: 20px;
`;

function Model() {
  const objModel = useLoader(OBJLoader, pic);

  objModel.rotation.x = Math.PI / 2;

  return <primitive object={objModel} position={[1, 1, 1]} />;
}

function Controls() {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  useFrame(() => controlsRef.current.update());
  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
}

const Modelingg = () => {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [selectedSheet, setSelectedSheet] = useState('');

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
      <Container>
        <Title>3D model of our vertical pressure vessel.</Title>
        <Paragraph>This pressure vessel was designed using SolidWorks.</Paragraph>
        <CanvasContainer>
          <Canvas style={{ width: '100%', height: '100%' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <Controls />
          </Canvas>
        </CanvasContainer>
        <DrawingContainer>
          <DrawingTitle>Drawing sheets of our vertical pressure vessel</DrawingTitle>
          <DrawingParagraph>
            The vertical pressure vessel below was designed by the mechanical engineers of this project. In order to dive more into the details of the dimensions and sheet drawings,
            <strong style={{ color: '#FFA500' }}> click the pressure vessel picture.</strong>
          </DrawingParagraph>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DrawingButton onClick={() => setButtonClicked(!isButtonClicked)}>
              <DrawingImage src={annotation} alt="Annotation" />
            </DrawingButton>
            {isButtonClicked && (
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                <DrawingSelect onChange={(e) => setSelectedSheet(e.target.value)}>
                  <option value="">Explore sheets</option>
                  <option value="head">Head</option>
                  <option value="nozzle">Nozzle rings</option>
                  <option value="shell">Shell</option>
                  <option value="supports">Supports</option>
                  <option value="assembly">Assembly</option>
                  <option value="weldment">Weldment</option>
                </DrawingSelect>
              </div>
            )}
          </div>
          <DrawingImageContainer>
            {selectedSheet === 'head' && <img src={head} alt="Head" style={{ width: '100%' }} />}
            {selectedSheet === 'nozzle' && <img src={nozzle} alt="Nozzle" style={{ width: '100%' }} />}
            {selectedSheet === 'shell' && <img src={shell} alt="Shell" style={{ width: '100%' }} />}
            {selectedSheet === 'supports' && <img src={supports} alt="Supports" style={{ width: '100%' }} />}
            {selectedSheet === 'assembly' && <img src={assembly} alt='Assembly' style={{ width: '100%' }} />}
            {selectedSheet === 'weldment' && <img src={weldment} alt='Weldment' style={{ width: '100%' }} />}
          </DrawingImageContainer>
        </DrawingContainer>
      </Container>
    </>
  );
};

export default Modelingg;