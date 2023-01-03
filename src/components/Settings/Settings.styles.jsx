import styled from "styled-components";
import { Laptop, mobile, tablet } from "../../responsive";
import { rel8Blue, rel8LightPink, rel8Pink, rel8Purple, rel8White } from "../../globals";

export const SettingsContainer = styled.div`
    margin-top: 67px;
    margin-left: 220px;
    padding: 50px 30px;
    background-color: ${rel8Pink};
    min-height: 100vh;

    ${
        mobile({
            marginTop: "0px",
            marginLeft: "0px",
        })
    }
    ${
        tablet({
            marginTop: "0px",
            marginLeft: "0px",
        })
    }
` 

export const SettingsHeader = styled.p`
    font-size: 24px;
    color: ${rel8Purple};
`
export const SettingsSubHeader = styled.p`
    font-size: 14px;
    color: #d3d3d3;
`
export const SettingsUploadCon = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`
export const SettingsUploadLabel = styled.label``
export const SettingsUploadImg = styled.img`
    cursor: pointer;
`
export const SettingsUploadInput = styled.input`
    display: none;
`
export const SettingsUpload = styled.div`
    width: 50%;
    border: 2px dashed ${rel8Purple};
    background-color: ${rel8LightPink};
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
    height: 200px;
`