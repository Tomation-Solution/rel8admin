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
    z-index: 10;
`
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
const SubConHeader2 = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
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

const DeactivateDue = ({close}) => {
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
            <SubConHeader>Deactivate Due</SubConHeader>
            <SubConHeader2>Are you sure of your action?</SubConHeader2>
            <SubConBtnHold>
                <SubConBtn typex="filled">Deactivate</SubConBtn>
                <SubConBtn onClick={close}>Activate</SubConBtn>
            </SubConBtnHold>
        </SubCon>
    </BackDrop>
  )
}

export default DeactivateDue