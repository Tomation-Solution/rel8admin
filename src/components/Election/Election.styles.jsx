import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import { rel8Pink } from "../../globals";

export const ElectionContainer = styled.div`
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