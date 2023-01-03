import styled from "styled-components";
import { mobile, tablet, Laptop } from "../../responsive";
import { rel8Pink } from "../../globals";

export const DuesContainer = styled.div`
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

export const DuesHighlight = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
    margin-bottom: 40px;
    ${
        mobile({
            display: "grid",
            gridTemplateColumns: "auto",
        })
    }
    ${
        tablet({
            display: "grid",
            gridTemplateColumns: "auto auto",
        })
    }
    ${
        Laptop({
            display: "grid",
            gridTemplateColumns: "auto auto",
        })
    }
`