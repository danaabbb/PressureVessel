import React from 'react';
import { Button } from '../ButtonElement';
import { ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img } from './Elements';
import { Link, useNavigate } from 'react-router-dom';

const InfoSection = ({ lightBg, id, imgStart, topline, lightText, headline, description, img, alt, buttonLabel }) => {
  const navigate = useNavigate();

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
                <Link to='/modeling' style={{ textDecoration: 'none' }}>
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

export default InfoSection;