import styled from "styled-components";
import { rel8Blue, rel8Pink, rel8Purple } from '../../globals'
import { mobile, tablet } from '../../responsive'

export const TopNav = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 270px);
    float: right;
    right: 0px;
    top: 0px;
    padding: 20px 20px 20px 0px;
    padding-left: 30px;
    position: absolute;
    background-color: ${rel8Pink};

    ${
        mobile({
            width: "inherit",
            position: "static",
            float: "none",
            alignItems: "center",
        })
    }
    ${
        tablet({
            width: "inherit",
            position: "static",
            float: "none",
            alignItems: "center",
        })
    }
`
export const Hamburger = styled.div`
    width: 30px;
    height: 4px;
    background-color: ${rel8Purple};
    cursor: pointer;
    position: relative;
    display: none;
    margin-right: 20px;

    &::before{
        content: "";
        width: 100%;
        height: 4px;
        display: block;
        background-color: ${rel8Purple};
        position: absolute;
        top: 10px;
    }
    &::after{
        content: "";
        width: 100%;
        height: 4px;
        display: block;
        background-color: ${rel8Purple};
        position: absolute;
        bottom: 10px;
    }
    ${
        mobile({
            display: "block",
        })
    }

    ${
        tablet({
            display: "block",
        })
    }
`
export const TopNavTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    word-wrap: break-word;
`
export const TopNavIcons = styled.div`
    display: flex;
    width: 10%;
    justify-content: space-evenly;
    align-items: center;
    ${
        mobile({
            display: "block",
        })
    }

    ${
        tablet({
            display: "block",
        })
    }
`

export const SideBarContainer = styled.div`
    padding: 20px;
    display: flex;
    height: 100%;
    width: 180px;
    background-color: ${rel8Blue};
    flex-direction: column;
    word-wrap: break-word;
    color: ${rel8Purple};
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;

    ${
        mobile({
            display: "none",
        })
    }
    ${
        tablet({
            display: "none",
        })
    }
`
export const SideBarContainer2 = styled.div`
    padding: 20px;
    display: flex;
    height: 100%;
    width: 180px;
    background-color: ${rel8Blue};
    flex-direction: column;
    word-wrap: break-word;
    color: ${rel8Purple};
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.3s all;
    overflow: auto;
    transform: translate(${props=>props.open ? "0%" : "-100%"});
    z-index: 10;
`
export const CloseSlider = styled.div`
    width: 30px;
    height: 5px;
    background-color: ${rel8Purple};
    transform: rotate(45deg);
    cursor: pointer;

    &::after{
        content: "";
        width: 30px;
        height: 5px;
        display: block;
        background-color: ${rel8Purple};
        transform: rotate(90deg);
    }
`
export const SideBarLogoCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SideBarLogo = styled.img``

export const SideBarItemCon = styled.div`
    margin-top: 30px;
`
export const SideBarItem = styled.div`
    a{
        text-decoration: none;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        margin-right: -20px;
    }
`
export const LogOutBtn = styled.div`
        text-decoration: none;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 10px;
        color: red;
        display: flex;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        margin-right: -20px;
        border: 1px solid red;
`