import React from 'react'
import { Link } from 'react-scroll'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper , SidebarMenu, SidebarLink } from './SidebarElements'
const Sidebar = ({isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen ={isOpen} onClick={toggle}>
        <Icon onClick ={toggle} >
            <CloseIcon />

        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="herosection" onClick={toggle}> What is a Pressure Vessel?

                </SidebarLink>
                <SidebarLink to="modeling" onClick={toggle}> Modeling

                </SidebarLink>
                <SidebarLink to="calculations" onClick={toggle}> Calculation

                </SidebarLink>
                <SidebarLink to="aboutus" onClick={toggle}> About us 

                </SidebarLink>
            </SidebarMenu>
            
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar