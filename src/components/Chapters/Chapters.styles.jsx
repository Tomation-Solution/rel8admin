import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import { rel8Pink, rel8Purple, rel8White } from "../../globals";

export const ChaptersContainer = styled.div`
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
export const ChaptersHeader = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: ${rel8Purple}; 
`
export const ChaptersButtonCon = styled.div`
    margin: 30px 0px;
    display: flex;
    align-items: center;
    ${
        mobile({
            flexDirection: "column",
        })
    }
`
export const ChaptersButton = styled.div`
    color: ${rel8White};
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    margin: 20px;
    background-color: ${rel8Purple};
    cursor: pointer;
    font-size: 14px;
    pointer-events: ${props=>props.isUsable === "no" ? "none" : "all"};
`