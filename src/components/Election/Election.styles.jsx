import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import { rel8Pink, rel8Purple } from "../../globals";

export const ElectionContainer = styled.div`
  margin-top: 67px;
  margin-left: 220px;
  padding: 50px 30px;
  background-color: ${rel8Pink};
  min-height: 100vh;
  ${mobile({
    marginTop: "0px",
    marginLeft: "0px",
  })}
  ${tablet({
    marginTop: "0px",
    marginLeft: "0px",
  })}
`;
export const ElectionOptions = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

export const ElectionOptionsItem = styled.span`
  color: ${rel8Purple};
  margin: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.filled === "yes" ? "700" : "")};
`;

export const ElectionSetupElection = styled.div``;

export const ElectionResults = styled.div``;

export const ElectionUploadReportHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;

export const ElectionUploadReport = styled.button`
  padding: 10px 20px;
  border: 1px dashed ${rel8Purple};
  border-radius: 10px;
  cursor: pointer;
`;
export const ElectionThemeHeader = styled.p`
  font-size: 20px;
  color: ${rel8Purple};
  margin: 30px 20px;
  text-decoration: underline;
`;
