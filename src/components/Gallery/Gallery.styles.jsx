import styled from "styled-components";
import { rel8Blue, rel8Pink, rel8Purple, rel8White } from "../../globals";
import { Laptop, mobile, tablet } from "../../responsive";

export const GalleryContainer =  styled.div`
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

export const GalleryHeader = styled.h1`
    color: ${rel8Purple};
`

export const GalleryImagesHolder = styled.div`
    margin-top: 60px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
    cursor: pointer;
    ${
        mobile({
            gridTemplateColumns: "auto"
        })
    }
    ${
        tablet({
            gridTemplateColumns: "auto auto"
        })
    }
    ${
        Laptop({
            gridTemplateColumns: "auto auto auto"
        })
    }
`
export const GalleryImageCard = styled.div`
    height: 200px;
    border-radius: 10px;
    border: 2px dashed ${rel8Purple};
    background-color: ${rel8White};
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.3s all;

    &:hover{
        border: 2px solid ${rel8Purple};
        background-color: ${rel8Blue};
    }
`
export const GalleryImageCardTextLine = styled.p`
    font-size: ${props=>props.size==="bigger" ? "20px" : "18px"};
    font-weight: ${props=>props.size==="bigger" ? "600" : ""};
    margin: 10px 0px;
    color: ${rel8Purple};
    text-align: center;
`