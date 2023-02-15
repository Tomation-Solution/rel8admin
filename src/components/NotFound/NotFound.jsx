import React from "react";
import styled from "styled-components";
import { rel8LightPink, rel8Purple } from "../../globals";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${rel8Purple};
  height: 100vh;
  overflow: hidden;
  background-color: ${rel8LightPink};
`;
const Header = styled.span`
  font-size: 40px;
  margin-bottom: 50px;
  font-weight: 700;
`;
const SubHeader = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
`;

const NotFound = () => {
  return (
    <Container>
      <Header>404</Header>
      <SubHeader>Page not found</SubHeader>
    </Container>
  );
};

export default NotFound;
