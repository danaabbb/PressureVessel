import React from 'react'
import { Button } from '../ButtonElement'
import { ImgWrap } from '../ModelingSection/Elements.js'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img} from '../ModelingSection/Elements.js'
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
const CalculationSection = ({ showIcon, lightBg, id, imgStart, topline, lightText, headline, darkText, description, img, alt, buttonLabel,dark, dark2 , primary }) => {
  const navigate =useNavigate();
  return (
    <>
   
    <InfoContainer lightBg={lightBg} id={id} > 
    <InfoWrapper>
        <InfoRow imgStart= {imgStart}>
            <Column1>
            <TextWrapper>
                <TopLine>{ topline}</TopLine>
                <Heading lightText= {lightText}> {headline}  </Heading>
                <Subtitle lightBg = {lightBg} > {description} </Subtitle>
                <BtnWrap> 
                   <Link to='/calculations' style={{ textDecoration: 'none' }}> 
                   <Button> {buttonLabel} </Button> 
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
    </>
  )
}


export default CalculationSection