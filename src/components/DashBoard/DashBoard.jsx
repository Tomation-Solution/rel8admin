import React from 'react'
import { useState } from 'react'
import { DuesIcon, PlusCircleIcon } from '../../assets/SideBar/svgs'
import { DeleteOnly } from '../ActionComponents/ActionComponents1'
import { DashBoardContainer, DashBoardHeaders, DashBoardHeadersItem, DashBoardLeft,
   DashBoardMemberCon, DashBoardPersons, DashBoardRight, DashBoardRightCon,
    DashBoardRightDue, DashBoardRightDueButton,
     DashBoardRightDueHeader, DashBoardRightDueSubHeader } from './DashBoard.styles'
import DeleteMember from './DeleteMember'
import MemberDetBox from './MemberDetBox'

const DashBoard = () => {
  const [showModal, setModal] = useState(false)

  const displayModal = () => {
    setModal(!showModal)
  }
  // const deleteHandler = () => {

  // }
  return (
    <>
    
    {showModal && <DeleteMember close={displayModal}/>}
    <DashBoardContainer>
      <DashBoardLeft>
        <DashBoardMemberCon>
          <MemberDetBox cirColor={"red"} data={{header:"20,000", subheader:"Membership"}}/>
          <MemberDetBox cirColor={"red"} data={{header:"20,000", subheader:"Membership"}}/>
          <MemberDetBox data={{header:"20,000", subheader:"Membership"}}/>
          <MemberDetBox data={{header:"20,000", subheader:"Membership"}}/>
        </DashBoardMemberCon>

        <DashBoardPersons>
          <DashBoardHeaders>
            <DashBoardHeadersItem>Excos</DashBoardHeadersItem>
            <DashBoardHeadersItem>Members</DashBoardHeadersItem>
          </DashBoardHeaders>

          <DeleteOnly deleteFn={displayModal}/>
        </DashBoardPersons>
      </DashBoardLeft>

      <DashBoardRight>
        <DashBoardRightCon>

          <DashBoardRightDue>
            <DuesIcon style={{width:"50px", height:"50px"}}/>
            <DashBoardRightDueHeader>1,700,700</DashBoardRightDueHeader>
            <DashBoardRightDueSubHeader>Total Income this month</DashBoardRightDueSubHeader>
            <DashBoardRightDueButton>
              <PlusCircleIcon style={{height:"25px",width:"25px"}}/>
              Add Due
            </DashBoardRightDueButton>
          </DashBoardRightDue>

        </DashBoardRightCon>
      </DashBoardRight>
    </DashBoardContainer>
    </>
  )
}

export default DashBoard