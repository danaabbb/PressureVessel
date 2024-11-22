import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import image1 from '/Users/danaabdo/Desktop/pressure/src/images/fo2.jpg';
import image2 from '/Users/danaabdo/Desktop/pressure/src/images/shell.jpg';
import image3 from '/Users/danaabdo/Desktop/pressure/src/images/supports.jpg';
import image4 from '/Users/danaabdo/Desktop/pressure/src/images/tahet.jpg';
import { FcEngineering } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, LogoIcon, MobileIcon } from '/Users/danaabdo/Desktop/pressure/src/components/Navbar/NavbarElements.js'; // Import your Navbar elements
import { color } from 'framer-motion';

const StyledImage = styled.img`
 
  margin-right: 20px;
  
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
  border: 1px solid #ddd;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Modeling = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
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
                    <MobileIcon onClick={toggle}> 
                        <FaBars /> 
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
            <div style={{ padding: '20px' , background:'black'}}>
              <h1 style={{ color:'white',  textAlign:'center', fontWeight: 'bold', paddingBottom: '20px' }}> Introducing Our Precision-Engineered Pressure Vessel Sheets</h1>
              <p style={{ color: 'white', textAlign: 'center', fontSize: '18px', maxWidth: '800px', margin:'auto' }}>Introducing our meticulously crafted sheets, designed to enhance the performance and durability of your pressure vessels. Engineered with precision and attention to detail, these sheets seamlessly complement our vertical vessels, offering an added layer of protection and efficiency. Our customizable options ensure that each sheet is tailored to your specific needs, guaranteeing optimal performance in diverse industrial applications. Trust in our commitment to quality and reliability, as each sheet undergoes rigorous testing to meet our stringent standards. Explore the difference our designed sheets can make for your operations today.</p>
            </div>
    <div style={{ backgroundColor: 'black', color: 'white', height: '200vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
     
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop:'-200px'}}>
      <StyledImage 
        src={image1} 
        alt="Description of the first image" 
        style={{ width:'21%', borderTopLeftRadius: '80%', borderTopRightRadius: '80%', marginRight:'40px' }}
        onMouseEnter={() => setToggle1(true)}
        onMouseLeave={() => setToggle1(false)}
      />
      {toggle1 && <p style={{ width: '10%', textAlign:" right" }}>Top head of the vessel </p>}
    </div>

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '60%'}}>
      <StyledImage 
        src={image2} 
        alt="Description of the second image" 
        style={{width:'280px', marginRight:'39px' }}
        onMouseEnter={() => setToggle2(true)}
        onMouseLeave={() => setToggle2(false)}
      />
      {toggle2 && <p style={{width: '20%', textAlign: 'right' }}>Shell of the vessel </p>}
    </div>

    <div style={{zIndex: 2,  display: 'flex', alignItems: 'center', justifyContent: 'center', width: '94%'}}>
      <StyledImage 
        src={image4} 
        alt="Description of the first image" 
        style={{ width:'22.3%', borderBottomLeftRadius: '80%', borderBottomRightRadius: '80%', marginRight:'40px' }}
        onMouseEnter={() => setToggle3(true)}
        onMouseLeave={() => setToggle3(false)}
      />
      {toggle3 && <p style={{ width: '30%', textAlign: 'right'}}>Bottom head of the vessel </p>}
    </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '34%'}}>
      <StyledImage 
        src={image3} 
        alt="Description of the third image" 
        style={{ width: '50%', height:'70%', marginTop:'-200px', marginRight: '40px'}} 
        onMouseEnter={() => setToggle4(true)}
        onMouseLeave={() => setToggle4(false)}
      />
      {toggle4 && <p style={{ width: '30%', textAlign: 'right'}}>Supports  </p>}
    </div>    </div>
    </>
  )
}

export default Modeling;