import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import Karl from '../images/Karl.jpg';
import thomas from '../images/thomas.jpg'
import dana from '../images/dana.jpeg'
import dr from '../images/dr.jpg'
import ralph from '../images/ralph.jpg'
import nour from '../images/nour.JPG'

const CarouselContainer = styled.div`
    width: 600px;
    height: 400px;
    padding: 0px;
    border-radius: 10px;
    overflow: hidden;
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;

const ImageCarousel = () => {
    const images = [
        { src: dr, caption: 'Dr. Hussein Farroukh', email: 'hussein.farroukh@net.usj.edu.lb'},
        { src: Karl, caption: 'Karl', email:' karl.tohme@net.usj.edu.lb' },
        { src: thomas, caption: 'Thomas', email: 'thomas.costa@net.usj.edu.lb' },
        { src: dana, caption: 'Dana' , email: 'dana.abdo@net.usj.edu.lb'},
        { src: nour, caption: 'Nour' , email: 'nour.saba@net.usj.edu.lb'},
        { src: ralph, caption: 'Ralph' , email: 'ralph.feghaly@net.usj.edu.lb'}
    ];

    return (
        <CarouselContainer>
            <Carousel autoPlay interval={2000} showThumbs={false}>
                {images.map((image, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                        <img src={image.src} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <p className="legend" style={{ color: 'white', fontSize: '12px', width: 'auto', backgroundColor: 'rgba(128,128,128,0.5)' }}> {image.caption} <br /> {image.email}</p>
                    </div>
                ))}
            </Carousel>
        </CarouselContainer>
    );
};

export default ImageCarousel;