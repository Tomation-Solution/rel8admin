import styled from "styled-components";
import { rel8Pink, rel8Purple, rel8White } from "../../globals";
import { mobile, tablet } from "../../responsive";

export const EventsContainer = styled.div`
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
export const EventsHeader = styled.p`
    font-size: 20px;
    color: ${rel8Purple};
`
export const EventsList = styled.div`
    width: 100%;
    background-color: ${rel8White};
    border-radius: 10px;
    padding: 20px 0px;
`