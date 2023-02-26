//NOT REALLY USED, THINK THIS IS USELESS YOU SHOULD BE ABLE TO DELETE IT
import React from "react";
import styled from "styled-components";
import { rel8Pink, rel8Purple, rel8White } from "../../globals";

const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
const Form = styled.form`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
`;
const FormData = styled.input`
  padding: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${rel8Purple};
  color: ${rel8Purple};
  &::placeholder {
    color: ${rel8Purple};
  }
`;
const SubCon = styled.div`
  background-color: ${rel8White};
  width: 250px;
  border-radius: 10px;
  padding: 20px;
`;
const SubConHeader = styled.p`
  font-weight: 700;
  text-align: center;
`;
const SubConHeader2 = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;
const SubConBtnHold = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const SubConBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.typex === "filled" ? `${rel8Purple}` : `${rel8Pink}`};
  color: ${(props) =>
    props.typex === "filled" ? `${rel8White}` : `${rel8Purple}`};
  cursor: pointer;
`;

const EditMember = ({ close }) => {
  return (
    <BackDrop>
      <style>
        {`
                body{
                    overflow:hidden;
                }
            `}
      </style>
      <SubCon>
        <SubConHeader>Edit Member</SubConHeader>
        <Form>
          <FormData placeholder="Enter Data" type={"text"} />
          <FormData placeholder="Enter Data" type={"text"} />
          <FormData placeholder="Enter Data" type={"text"} />
          <FormData placeholder="Enter Data" type={"text"} />
          <FormData placeholder="Enter Data" type={"text"} />
          <FormData placeholder="Enter Data" type={"text"} />
          <FormData placeholder="Enter Data" type={"text"} />
          <FormData placeholder="Enter Data" type={"text"} />
        </Form>
        <SubConBtnHold>
          <SubConBtn typex="filled">Edit</SubConBtn>
          <SubConBtn onClick={close}>Cancel</SubConBtn>
        </SubConBtnHold>
      </SubCon>
    </BackDrop>
  );
};

export default EditMember;
