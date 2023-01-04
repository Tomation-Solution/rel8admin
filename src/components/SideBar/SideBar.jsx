import React from 'react'
import { DashBoardIcon, DuesIcon, EventsIcon, LogoOutIcon, NewsIcon,
     NotificationIcon, SettingsIcon, UsersIcon } from '../../assets/SideBar/svgs'
import { CloseSlider, Hamburger, SideBarContainer, SideBarContainer2,
     SideBarItem, SideBarItemCon, SideBarLogo, SideBarLogoCon,
      TopNav, TopNavIcons, TopNavTitle } from './SideBar.styles'
import LogoImage from '../../assets/SideBar/Logo.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { rel8Purple, rel8White } from '../../globals'

const CustNavLink = ({where,children}) => (
    <NavLink to={where} style={({ isActive }) => ({ color: isActive ? `${rel8White}` : `${rel8Purple}`, backgroundColor: isActive ? `${rel8Purple}` : ""})}>
        {children}
    </NavLink>
)

const SideBar = () => {
    const [sideIsOpen,openSide] = useState(false)
  return (
    <>
    <TopNav>
        <Hamburger onClick={()=>openSide(!sideIsOpen)}/>
        <TopNavTitle>Admin Dashboard</TopNavTitle>
        <TopNavIcons>
            <SettingsIcon style={{width:"25px",height:"25px",cursor:"pointer"}}/>
            <NotificationIcon style={{width:"25px",height:"25px",cursor:"pointer"}}/>
        </TopNavIcons>
    </TopNav>
    <SideBarContainer>
        <SideBarLogoCon>
            <SideBarLogo alt='' src={LogoImage}/>
        </SideBarLogoCon>

        <SideBarItemCon>
                <SideBarItem>
                    <CustNavLink where={"/"}>
                        <DashBoardIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>DashBoard
                    </CustNavLink>
                </SideBarItem>
                <SideBarItem>
                    <CustNavLink where={"/members"}>
                        <UsersIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                        Members
                    </CustNavLink>
                </SideBarItem>
            <SideBarItem>
                <CustNavLink where={"/events"}>
                    <EventsIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                    Events
                </CustNavLink>
            </SideBarItem>
            <SideBarItem>
                <CustNavLink where={"/new-publications"}>
                    <NewsIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                    News/Publications
                </CustNavLink>
            </SideBarItem>
            <SideBarItem>
                <CustNavLink where={"/dues"}>
                    <DuesIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                    Dues
                </CustNavLink>
            </SideBarItem>
            <SideBarItem>
                <CustNavLink where={"/settings"}>
                    <SettingsIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                    Settings
                </CustNavLink>
            </SideBarItem>
            <SideBarItem>
                <CustNavLink where={"/logout"}>
                    <LogoOutIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                    Logout
                </CustNavLink>
            </SideBarItem>
        </SideBarItemCon>
    </SideBarContainer>

    <SideBarContainer2 open={sideIsOpen}>
        <SideBarLogoCon>
            <SideBarLogo alt='' src={LogoImage}/>
            <CloseSlider onClick={()=>openSide(!sideIsOpen)}/>
        </SideBarLogoCon>

        <SideBarItemCon>
        <SideBarItem>
                    <CustNavLink where={"/"}>
                        <DashBoardIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>DashBoard
                    </CustNavLink>
                </SideBarItem>
                <SideBarItem>
                    <CustNavLink where={"/members"}>
                        <UsersIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                        Members
                    </CustNavLink>
                </SideBarItem>
            <SideBarItem>
                <CustNavLink where={"/events"}>
                    <EventsIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                    Events
                </CustNavLink>
            </SideBarItem>
            <SideBarItem>
                <CustNavLink where={"/new-publications"}>
                    <NewsIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                    News/Publications
                </CustNavLink>
            </SideBarItem>
            <SideBarItem>
                <CustNavLink where={"/dues"}>
                    <DuesIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                    Dues
                </CustNavLink>
            </SideBarItem>
            <SideBarItem>
                <CustNavLink where={"/settings"}>
                    <SettingsIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                    Settings
                </CustNavLink>
            </SideBarItem>
            <SideBarItem>
                <CustNavLink where={"/logout"}>
                    <LogoOutIcon style={{width:"25px",height:"25px",marginRight:"10px"}}/>
                    Logout
                </CustNavLink>
            </SideBarItem>
        </SideBarItemCon>
    </SideBarContainer2>
    </>
  )
}

export default SideBar