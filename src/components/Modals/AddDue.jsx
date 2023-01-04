import React from 'react'
import styled from 'styled-components'
import { rel8Pink, rel8Purple, rel8White } from '../../globals'

const BackDrop = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
`
const FormData = styled.input`
    padding: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${rel8Purple};
    color: ${rel8Purple};
    outline: none;
    &::placeholder{
        color: ${rel8Purple};
    }
    margin: 10px 0px;
`
const FormSelection = styled.select`
    padding: 10px;
    color: ${rel8Purple};
    outline: none;
    border: none;
    border-bottom: 1px solid ${rel8Purple};
`
const FormOption = styled.option``
const SubCon = styled.div`
    background-color: ${rel8White};
    width: 250px;
    border-radius: 10px;
    padding: 20px;
`
const SubConHeader = styled.p`
    font-weight: 700;
    text-align: center;
`
const SubConBtnHold = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const SubConBtn = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: ${props=>props.typex==="filled" ? `${rel8Purple}`:`${rel8Pink}`};
    color: ${props=>props.typex==="filled" ? `${rel8White}`:`${rel8Purple}`};
    cursor: pointer;
`

const AddMember = ({close}) => {
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
        <SubConHeader>Add Member</SubConHeader>
        <Form>
        {/* "name":"by 5:00 am for real",
        "re_occuring":true,
        "is_for_excos":false,
        "amount":"50.00",
        "startDate":"2022-7-13",
        "startTime":"03:00",
        "scheduletype":"day_of_week",
        "schedule":["0","1","2","3"] */}
            <FormData placeholder='Due Name' type={"text"}/>
            <FormSelection defaultValue={"default"}>
                <FormOption disabled value={"default"}>Is Reoccuring</FormOption>
                <FormOption>Yes</FormOption>
                <FormOption>No</FormOption>
            </FormSelection>
            <FormSelection defaultValue={"default"}>
                <FormOption disabled value={"default"}>For Excos</FormOption>
                <FormOption>Yes</FormOption>
                <FormOption>No</FormOption>
            </FormSelection>
            <FormData placeholder='Due Amount' type={"text"}/>
            <FormData placeholder='Due Start Date' type={"date"}/>
            <FormData placeholder='Due Start Time' type={"text"}/>
        </Form>
        <SubConBtnHold>
            <SubConBtn typex="filled">Add</SubConBtn>
            <SubConBtn onClick={close}>Cancel</SubConBtn>
        </SubConBtnHold>
    </SubCon>
</BackDrop>
  )
}

export default AddMember