import React, { useState } from 'react';
import { FcEngineering } from "react-icons/fc";
import ImageCarousel from '../components/Carousel';
import styled from 'styled-components';
import { Nav, NavbarContainer, NavLogo, LogoIcon } from '../components/Navbar/NavbarElements.js';

const IntroParagraph = styled.p`
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.6;
    color: #fff;
    max-width: 800px;
`;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #000;
    color: #fff;
    padding: 5rem;
    grid-template-rows: auto 1fr;
`;

const Title = styled.h1`
    margin-top: 2rem;
    text-align: center;
`;

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
            <Container>
                <Title>Meet the Team</Title>
                <IntroParagraph>
                    We are a team of 4th year software and mechanical engineering students working on our multi-disciplinary project. Our supervisor is<strong style={{ color: '#FFA500' }}> Dr. Hussein Farroukh </strong>. This project is the result of months of research, hard work, and collaboration. We are excited to share our progress and look forward to the challenges ahead.
                </IntroParagraph>
                <ImageCarousel />
            </Container>
        </>
    );
};

export default MeetTheTeam;