import React from 'react'
import { useState } from 'react';
import { FcEngineering } from "react-icons/fc";
import seconditeration from '../images/seconditeration.png'
import firstiteration from '../images/firstiteration.png'
import styled from 'styled-components';
import nozzle from '../images/nozzle.png'
import head from '../images/second.png'
import pv from '../images/pv.png'
import pic from '../images/06.jpg'
import pic3 from '../images/Picture1.png'
import pic2 from '../images/06-2.jpg'
import pic5 from '../images/Screenshot 2024-04-26 at 4.14.45 PM.png'
import pic4 from '../images/Screenshot 2024-04-26 at 2.20.34 PM.png'
import { FaBars } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, LogoIcon, MobileIcon } from '../components/Navbar/NavbarElements.js'; // Import your Navbar elements
const PV= () => {
  const [isOpen, setIsOpen] = useState(false);
  const StyledImage = styled.img`
  margin-left: 350px;
  width: 40%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;
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
   
    <div style={{ backgroundColor: 'black', color: 'white', height: '700vh', width: '100vw', padding: '20px' }}>
      <h1 style={{ color: '#f9f9f9', fontSize: '2em', fontWeight: 'bold', marginBottom: '20px', marginLeft: '20px' }}>Pressure Vessels: What are they?</h1>
      <p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>
      Pressure vessels are used for storing dangerous liquids, specifically focusing on the increased demand for liquefied petroleum gas (LPG) worldwide. The construction of more LPG facilities necessitates the implementation of safer pressure vessels to mitigate risks such as explosions and leakage.
The primary objective of this project is to design a vertical pressure vessel, in accordance with the American Society of Mechanical Engineers (ASME) code, capable of safely storing 10 m3 of
pressurized LPG. The present design choices for the vertical pressure vessel project include things like material selection, vessel dimensions, and structural integrity measures. Strict safety regulations, legal restrictions, and operational limitations all influence these choices. The design seeks to balance industry codes, stress distribution, client demands, and corrosion resistance with pressure ratings, temperature fluctuations to maximize performance.
      </p>
      <img src={pv} alt="Vertical pressure vessel" style={{ marginLeft: '300px', width: '40%', height: 'auto', borderRadius: '10px', marginBottom: '30px' }} />
      <h2 style={{ color: '#f9f9f9', fontSize: '1.8em', fontWeight: 'bold', marginBottom: '20px', marginLeft: '20px' }}>Multiple design alternatives comparison</h2>
      <p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>
      When contrasting spherical, cylindrical, and other head designs for the vertical pressure vessel, each choice has certain benefits and drawbacks. Space-constrained storage applications can benefit from the cylindrical design's ability to optimize internal capacity within a given footprint. Due to their intrinsic strength and more even distribution of stress, spherical vessels are perfect for high-pressure settings. Variations in head shapes, like elliptical or hemispherical, affect variables like pressure distribution and fluid flow. The vertical pressure vessel with hemispherical head will be used because it successfully satisfies functional requirements and design restrictions by striking a compromise between structural integrity and effective fluid dynamics.
      </p>
      <img src={pic} alt="Spherical pressure vessel" style={{ marginLeft: '100px', width: '40%', height: 'auto', borderRadius: '10px', marginBottom: '30px' }} />
      <img src={pic2} alt="Spherical pressure vessel" style={{ marginLeft: '100px', width: '40%', height: 'auto', borderRadius: '10px', marginBottom: '30px' }} />
      <h3 style={{ color: '#f9f9f9', fontSize: '1.6em', fontWeight: 'bold', marginBottom: '20px', marginLeft: '20px' }}>Process of designing a Vertical Pressure Vessel</h3>
      <p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>
      The pressure vessel that the team members designed is a vertical design, adhering to ASME guidelines for calculations and analysis. With its vertical orientation, this pressure vessel is tailored for storing liquefied petroleum gas, requiring meticulous assessment to ensure it meets safety standards and functional demands.
     

 </p> 

      
    
   <p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}> <strong  style={{ color: '#FFA500' }}> Calculations could be done by using the Calculator of our website. </strong></p>
   <h style={{ color: '#f9f9f9', fontSize: '2em', fontWeight: 'bold', marginBottom: '30px', marginLeft: '20px' }}> Stress Calculation </h>
   <p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px', marginTop:'20px' }}>The vessel's shell experiences two types of stresses: hoop stress and longitudinal stress. Hoop stress refers to the stress along the circumference of the vessel, assessing its ability to expand around the z-axis. This stress is considered a normal stress for this study. On the other hand, longitudinal stress describes the vessel's ability to deform along its axis of revolution and is regarded as a shear stress.
The consideration made for designing the vessel is that’s considered as a thin wall case.
 </p>
 <img src={pic3} alt="Spherical pressure vessel" style={{ marginLeft: '100px', width: '40%', height: 'auto', borderRadius: '10px', marginBottom: '30px' }} />
 
<h3 style={{ color: '#f9f9f9', fontSize: '1.6em', fontWeight: 'bold', marginBottom: '20px', marginLeft: '20px' }}>Head Design </h3>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>The chosen heads in this instance are semi-ellipsoidal. For designing the heads, it is important to determine the spherical radius(R), neck radius(ri), and head height(h) in order to determine the design thickness(th). With the use of statistically developed formulae from trials, ASME specifies the ideal size for every component, guaranteeing safety.</p>


<img src={head} alt="Head" style={{ marginLeft: '320px', width: '40%', height: 'auto', borderRadius: '10px', marginBottom: '30px' }} />

<h3 style={{ color: '#f9f9f9', fontSize: '1.6em', fontWeight: 'bold', marginBottom: '20px', marginLeft: '20px' }}>Nozzle Design </h3>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}> When a nozzle is present, the fluid may be efficiently moved from its starting point. Evaluating different ideas is part of the process of designing the nozzle's dimensions. For instance, fluid mechanics and machinery design concepts must be taken into account while assessing the nozzle's output pressure and velocity, since these factors may have an influence on material failure. Based on the working pressure of the vessel, ASME offers precise nozzle design formulae. As fluid flows toward the nozzle, the three rings that make up the nozzle design are fused together to create a single, cohesive structure that minimizes thickness and cross-sectional area.
Depending on the situation, the two nozzles will be used to raise or lower the fluid pressure. The pressure in the tank must be raised from the initial atmospheric level of 1 bar to the operational pressure of 1.705 MPa before adding LPG. Because of this, the top nozzle will act as a diffuser to raise the pressure. On the other hand, under atmospheric circumstances, the second nozzle will reduce pressure to allow for an increased flow of LPG. Based on the picture below, the most important dimensions to determine are the 3 diameters that will enable us determine the 3 cross sectional areas that will modify the outlet pressure and speed of the fluid.
</p>
<img src={nozzle} alt="Nozzle" style={{ marginLeft: '320px', width: '40%', height: 'auto', borderRadius: '10px', marginBottom: '30px' }} />


<h3 style={{ color: '#f9f9f9', fontSize: '1.6em', fontWeight: 'bold', marginBottom: '20px', marginLeft: '20px' }}> 	Allowed diameter circumferential longitudinal strain </h3>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>
  One of the most important effects of generating stresses into a ductile material (like the SA-516 Gr70) is its overall impact on the dimensions of the structure. The ASME imposes strong constraints on the allowable variation of both diameter(d) and length(L) of the vessel.
</p>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>
  The regulations indicate that the allowable variation of length is: εL=variation of length should be less than 0.05%
</p>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>
  εd=Variation of diameter should be less than 0.08%
</p>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>
  Based on Hook’s law for elastic deformation applied on the material chosen: Young’s modulus imposed by the material selected is 200 GPa
</p>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>
  For longitudinal stress: ε_L=σ_L/E=(49.323×10^6)/(200×10^9 )=0.246×10^(-3) =0.0246% which is less than 0.05%
</p>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>
  For Hoop stress (circumferential deformation): ε_c=σ_c/E=(98.646×10^6)/(200×10^9 )=0.493×10^(-3)  =0.0493% which is less than 0.08%.
</p>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>
  Poisson’s ratio: A material attribute that measures how much a material compresses or expands in response to applied pressures is Poisson's ratio. It plays a significant role in the designing process of the vessel as it permits the manufacturer to understand the actual change of length of the vessel to its diameter variation.
</p>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}>
  ν =ε_L/ε_c =50%
</p>
<h3 style={{ color: '#f9f9f9', fontSize: '1.6em', fontWeight: 'bold', marginBottom: '20px', marginLeft: '20px' }}>FEA analysis</h3>

<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' ,  fontWeight:'bold'}}> Comparison between simulation results on Ansys Mechanical 2024 and theoretical values 
(First iteration) </p>
<img src={firstiteration} alt="First Iteration" style={{ marginLeft: '280px', width: '50%', height: 'auto', marginBottom: '30px' }} />
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' }}> The simulation safety factor is valid </p>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5', marginBottom: '30px', marginLeft: '30px' ,  fontWeight:'bold'}}> Comparison between simulation results on Ansys Mechanical 2024 and theoretical values (Second iteration) </p>
<img src={seconditeration} alt="Second Iteration" style={{ marginLeft: '280px', width: '50%', height: 'auto' }} /></div>
<p style={{ color: '#f9f9f9', fontSize: '1.2em', lineHeight: '1.5',  marginLeft: '50px'}}> The simulation safety factor is valid </p>  
    </>
  )
}

export default PV;