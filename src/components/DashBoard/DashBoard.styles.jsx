import styled from "styled-components";
import { rel8Blue, rel8Pink, rel8Purple, rel8White } from "../../globals";
import { Laptop, mobile, tablet } from "../../responsive";

export const DashBoardContainer = styled.div`
    margin-top: 67px;
    margin-left: 220px;
    padding: 50px 30px;
    background-color: ${rel8Pink};
    display: flex;
    gap: 5%;
    min-height: 100vh;

    ${
        mobile({
            marginTop: "0px",
            marginLeft: "0px",
            flexDirection: "column-reverse",
            minHeight: "0",
        })
    }
    ${
        tablet({
            flexDirection: "column-reverse",
            marginTop: "0px",
            marginLeft: "0px",
            minHeight: "0",
        })
    }
`
export const DashBoardLeft = styled.div`
    width: 60%;
    ${
        mobile({
            width: "100%",
        })
    }
    ${
        tablet({
            width: "100%",
        })
    }
`
export const DashBoardRight = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    ${
        mobile({
            width: "100%",
            marginBottom: "50px",
        })
    }
    ${
        tablet({
            width: "100%",
            marginBottom: "50px",
        })
    }
`
export const DashBoardMemberCon = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    ${
        mobile({
            display: "grid",
            gridTemplateColumns: "auto",
        })
    }
    ${
        Laptop({
            display: "grid",
            gridTemplateColumns: "auto",
        })
    }
`
export const DashBoardPersons = styled.div``
export const DashBoardHeaders = styled.div`
    display: flex;
    margin-top: 80px;
    margin-bottom: 30px;
`
export const DashBoardHeadersItem = styled.p`
    font-weight: 600;
    margin-right: 20px;
`

export const DashBoardRightCon = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${rel8White};
    border-radius: 10px;
    padding: 20px;

    ${
        mobile({
            width: "initial",
        })
    }
    ${
        tablet({
            width: "initial",
        })
    }
`
export const DashBoardRightDue = styled.div`
    background-color: ${rel8Blue};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
export const DashBoardRightDueHeader = styled.p`
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 10px;
`
export const DashBoardRightDueSubHeader = styled.p`
    font-size: 14px;
    margin-bottom: 20px;
`
export const DashBoardRightDueButton = styled.button`
    border: none;
    background-color: ${rel8Purple};
    color: ${rel8White};
    padding: 10px 10px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    border-radius: 5px;
`