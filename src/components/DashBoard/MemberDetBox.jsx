import React from 'react'
import styled from 'styled-components'
import { rel8Purple, rel8White } from '../../globals'

const Container = styled.div`
    display: flex;
    background-color: ${rel8White};
    padding: 20px;
    justify-content: space-between;
    border-radius: 10px;
`
const Circle = styled.div`
    background-color: ${props=>props.color ? `${props.color}` : `${rel8Purple}`};
    border-radius: 50%;
    width: 50px;
    height: 50px;
`

const TextCon = styled.div`
    text-align: center;
`
const Header = styled.p``
const SubHeader = styled.p`
    font-weight: 700;
    font-size: 18px;
`

const MemberDetBox = ({cirColor, data}) => {
  return (
    <Container>
        <Circle color={cirColor}></Circle>
        <TextCon>
            <SubHeader>{data.header}</SubHeader>
            <Header>{data.subheader}</Header>
        </TextCon>
    </Container>
  )
}

export default MemberDetBox