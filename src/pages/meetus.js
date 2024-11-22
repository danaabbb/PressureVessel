import React from 'react';
import { useState } from 'react';
import { FcEngineering } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import ImageCarousel from '../components/Carousel';
import styled from 'styled-components';
import dr from '../images/dr.jpg'

import { Nav, NavbarContainer, NavLogo, LogoIcon, MobileIcon } from '../components/Navbar/NavbarElements.js'; // Import your Navbar elements
import shab2 from '../images/shab2.png'
import thomas from '../images/thomas.jpg'
import Karl from '../images/Karl.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import benet2 from '../images/benet2.png'



const IntroParagraph = styled.p`
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.6;
    color: #white;
    max-width: 800px;
    
`;




const containerStyle = {
    display: 'grid',
    placeItems: 'center', // This will center the items both horizontally and vertically
    height: '100vh', // Make the container take up the full viewport height
    backgroundColor: '#000',
    color: '#fff',
    padding: '5rem',
    gridTemplateRows: 'auto 1fr', // This will create two rows: one for the title and one for the carousel
}

const MeetTheTeam = () => {
    
      const [isOpen, setIsOpen] = useState(false);

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
            <div style={containerStyle}>
                <h1 style={{ marginTop: '2rem', textAlign: 'center' }}>Meet the Team</h1>
                <IntroParagraph>
                    We are a team of 4th year software and mechanical engineering students working on our multi-disciplinary project. Our supervisor is<strong style={{ color: '#FFA500' }}> Dr. Hussein Farroukh </strong>. This project is the result of months of research, hard work, and collaboration. We are excited to share our progress and look forward to the challenges ahead.
                </IntroParagraph>
                <ImageCarousel /> {/* Use the ImageCarousel component here */}
            </div>
        </>
    );
};
export default MeetTheTeam;