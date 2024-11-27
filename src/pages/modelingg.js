import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from '/Users/danaabdo/Desktop/pressure/src/images/fo2.jpg';
import image2 from '/Users/danaabdo/Desktop/pressure/src/images/shell.jpg';
import image3 from '/Users/danaabdo/Desktop/pressure/src/images/supports.jpg';
import image4 from '/Users/danaabdo/Desktop/pressure/src/images/tahet.jpg';
import { FcEngineering } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, LogoIcon, MobileIcon } from '/Users/danaabdo/Desktop/pressure/src/components/Navbar/NavbarElements.js';

const StyledImage = styled.img`
  margin-right: 20px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
  border: 1px solid #ddd;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  padding: 20px;
  background: black;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  font-weight: bold;
  padding-bottom: 20px;
`;

const Description = styled.p`
  color: white;
  text-align: center;
  font-size: 18px;
  max-width: 800px;
  margin: auto;
`;

const ImageContainer = styled.div`
  background-color: black;
  color: white;
  height: 200vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -200px;
`;

const ImageDescription = styled.p`
  width: 10%;
  text-align: right;
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
      <Container>
        <Title>Introducing Our Precision-Engineered Pressure Vessel Sheets</Title>
        <Description>
          Introducing our meticulously crafted sheets, designed to enhance the performance and durability of your pressure vessels. Engineered with precision and attention to detail, these sheets seamlessly complement our vertical vessels, offering an added layer of protection and efficiency. Our customizable options ensure that each sheet is tailored to your specific needs, guaranteeing optimal performance in diverse industrial applications. Trust in our commitment to quality and reliability, as each sheet undergoes rigorous testing to meet our stringent standards. Explore the difference our designed sheets can make for your operations today.
        </Description>
      </Container>
      <ImageContainer>
        <ImageWrapper>
          <StyledImage
            src={image1}
            alt="Top head of the vessel"
            style={{ width: '21%', borderTopLeftRadius: '80%', borderTopRightRadius: '80%', marginRight: '40px' }}
            onMouseEnter={() => setToggle1(true)}
            onMouseLeave={() => setToggle1(false)}
          />
          {toggle1 && <ImageDescription>Top head of the vessel</ImageDescription>}
        </ImageWrapper>

        <ImageWrapper style={{ flexDirection: 'row', justifyContent: 'center', width: '60%' }}>
          <StyledImage
            src={image2}
            alt="Shell of the vessel"
            style={{ width: '280px', marginRight: '39px' }}
            onMouseEnter={() => setToggle2(true)}
            onMouseLeave={() => setToggle2(false)}
          />
          {toggle2 && <ImageDescription style={{ width: '20%' }}>Shell of the vessel</ImageDescription>}
        </ImageWrapper>

        <ImageWrapper style={{ zIndex: 2, width: '94%' }}>
          <StyledImage
            src={image4}
            alt="Bottom head of the vessel"
            style={{ width: '22.3%', borderBottomLeftRadius: '80%', borderBottomRightRadius: '80%', marginRight: '40px' }}
            onMouseEnter={() => setToggle3(true)}
            onMouseLeave={() => setToggle3(false)}
          />
          {toggle3 && <ImageDescription style={{ width: '30%' }}>Bottom head of the vessel</ImageDescription>}
        </ImageWrapper>

        <ImageWrapper style={{ width: '34%' }}>
          <StyledImage
            src={image3}
            alt="Supports"
            style={{ width: '50%', height: '70%', marginTop: '-200px', marginRight: '40px' }}
            onMouseEnter={() => setToggle4(true)}
            onMouseLeave={() => setToggle4(false)}
          />
          {toggle4 && <ImageDescription style={{ width: '30%' }}>Supports</ImageDescription>}
        </ImageWrapper>
      </ImageContainer>
    </>
  );
};

export default Modeling;