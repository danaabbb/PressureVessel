import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import { BtnWrap } from '../../components/ModelingSection/Elements';

import { homeObj } from '../ModelingSection/Data';
import Meetus from '../../pages/meetus';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,
ArrowForward, ArrowRight} from './HeroElements'
import InfoSection from '../ModelingSection';
import pv from '../../pages/pv';
import { Link } from 'react-router-dom';
const HeroSection = () => {
    const [hover, setHover] = useState(false) 
    const onHover = () => {
        setHover (!hover) 
    }
  return (
    <HeroContainer  >
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type= 'video/mp4'/> 
            </HeroBg>
        <HeroContent>
              
            <HeroH1>  Exploring the Heart of Engineering: What is a Pressure Vessel? </HeroH1>
            <HeroP> </HeroP>
            <HeroBtnWrapper> 
            <BtnWrap>
                        <Link to='/pv' onMouseEnter={onHover} onMouseLeave={onHover} style={{ textDecoration: 'none' }}>
                            <Button>
                                Explore {hover ? <ArrowForward /> : <ArrowRight />}
                            </Button>
                        </Link>
                    </BtnWrap>
       
            </HeroBtnWrapper>
            
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection