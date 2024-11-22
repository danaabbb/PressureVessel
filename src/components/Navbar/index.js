import React from 'react'
import {FaBars} from 'react-icons/fa'
import { FcEngineering} from 'react-icons/fc'
import {Link as ScrollLink} from 'react-scroll'
import {SidebarLink} from '../Sidebar/SidebarElements'
import { Nav, NavbarContainer, NavLogo , MobileIcon,  NavMenu , NavItem, NavLinks, LogoIcon } from './NavbarElements'
const Navbar = ({toggle }) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo
                to='/'>
                
                <LogoIcon> 
                <FcEngineering />
                
                </LogoIcon>
                       Pressure Vessel
            </NavLogo>
            <MobileIcon onClick = {toggle} > 
                <FaBars /> 
            </MobileIcon> 
            <NavMenu> 
                <NavItem>
                <NavLinks to="herosection" > What is a PV? </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="modeling" > Modeling </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="calculations" > Calculation </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="aboutus" > About us </NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    
    </>
  )
}

export default Navbar