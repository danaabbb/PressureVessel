import React from 'react';
import { Button } from '../ButtonElement';
import { ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img } from '../ModelingSection/Elements.js';
import { Link } from 'react-router-dom';

const CalculationSection = ({ lightBg, id, imgStart, topline, lightText, headline, description, img, alt, buttonLabel }) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topline}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightBg={lightBg}>{description}</Subtitle>
              <BtnWrap>
                <Link to='/calculations' style={{ textDecoration: 'none' }}>
                  <Button>{buttonLabel}</Button>
                </Link>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default CalculationSection;