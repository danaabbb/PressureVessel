import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/ModelingSection';
import {  homeObjOne, homeObjTwo, homeObjThree } from '../components/ModelingSection/Data';
import { Element } from 'react-scroll';
import CalculationSection from '../components/CalculationSection';
import MeetusSection from '../components/MeetusSection';

const Home = () => {
  const [isOpen , setIsOpen] = useState(false)

  const toggle = ()=> { 
    setIsOpen (!isOpen)
  }
  return (
    <>
    <Sidebar isOpen = {isOpen} toggle= {toggle}/> 
    <Navbar toggle = {toggle} />
    
    <Element name="herosection">
    <HeroSection /> 
    </Element>
    
    <InfoSection {...homeObjOne} /> 
    <CalculationSection {...homeObjTwo} /> 
    <MeetusSection {...homeObjThree} /> 
    </>
    
  );
};

export default Home