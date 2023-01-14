import styled from "styled-components";
import { rel8Pink, rel8Purple, rel8White } from "../../globals";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${rel8Pink};
`
export const LoginSubContainer = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
`
export const LoginSubHeader =  styled.p`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    color: ${rel8Purple};
`
export const LoginForms = styled.form`
    display: flex;
    flex-direction: column;
    margin: 30px ;
`
export const FormLabel =  styled.label`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin: 10px 0px;
    color: ${rel8Purple};
`
export const LoginFormInput = styled.input`
    padding: 5px 0px;
    background-color: transparent;
    border: none;
    border: 1px solid ${rel8Purple};
    border-radius: 5px;
    padding: 5px;
    color: ${rel8Purple};
    outline: none;
    &::placeholder{
        color: ${rel8Purple};
    }
`
export const LoginSubConBtnHold = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
`
export const LoginSubConBtn = styled.input`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: ${props=>props.loading==="loading" ? "gray" : `${rel8Purple}`};
    color: ${props=>props.typex==="filled" ? `${rel8White}`:`${rel8Purple}`};
    cursor: ${props=>props.loading==="loading" ? "not-allowed" : "pointer"};
    pointer-events: ${props=>props.loading==="loading" ? "none" : "auto"};
`

export const LoginErrorContainer = styled.p`
    background-color: #c73232;
    color: white;
    font-size: 14px;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
`