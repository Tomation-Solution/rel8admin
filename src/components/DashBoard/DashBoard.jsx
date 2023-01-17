import React, { useEffect } from 'react'
import { useState } from 'react'
import { DuesIcon, PlusCircleIcon } from '../../assets/SideBar/svgs'
import { ExcoDelTable, MemberDelTable } from '../ActionComponents/ActionComponents1'
import { DashBoardContainer, DashBoardHeaders, DashBoardHeadersItem, DashBoardLeft,
   DashBoardMemberCon, DashBoardPersons, DashBoardRight, DashBoardRightCon,
    DashBoardRightDue, DashBoardRightDueButton,
     DashBoardRightDueHeader, DashBoardRightDueSubHeader } from './DashBoard.styles'
import DeleteMember from './DeleteMember'
import MemberDetBox from './MemberDetBox'
import AddDue from '../Modals/AddDue'
import { useQuery } from 'react-query'
import { getAllExcos, getAllMembers } from '../../utils/api-calls'
import Loading from '../Loading/Loading'

const DashBoard = () => {
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])
  const [showModal, setModal] = useState(false)
  const [addDueModal, setAddDueModal] = useState(false)
  const [options, setOptions] = useState("exco")

  const displayModal = () => {
    setModal(!showModal)
  }
  const displayAddDueModal = () => {
    setAddDueModal(!addDueModal)
  }

  const { isLoading:excoLoading, isFetching:excoFetching, data:excoData, isError:excoIsError } = useQuery('all-excos', getAllExcos,{
    refetchOnWindowFocus:false,
  })
  const { isLoading:memLoading, isFetching:memFetching, data:memData, isError:memIsError } = useQuery('all-members', getAllMembers, {
    refetchOnWindowFocus:false 
  })

  console.log(excoData)
  console.log(memData)
  return (
    <>
    
    {showModal && <DeleteMember close={displayModal}/>}
    {addDueModal && <AddDue close={displayAddDueModal}/>}
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
            <DashBoardHeadersItem onClick={()=>setOptions("exco")} filled={options === "exco" ? "show" : ""}>Excos</DashBoardHeadersItem>
            <DashBoardHeadersItem onClick={()=>setOptions("mem")} filled={options === "mem" ? "show" : ""}>Members</DashBoardHeadersItem>
          </DashBoardHeaders>

          {
            options==="exco" ? 
            (excoLoading || excoFetching) ? <Loading loading={excoLoading}/> : (!excoIsError) ? (<MemberDelTable deleteFn={displayModal}/>) : <small>cant fetch excos</small>
            : 
            (memLoading || memFetching) ? <Loading loading={memLoading}/> : (!memIsError) ? <ExcoDelTable deleteFn={displayModal}/> : <small>cant fetch members</small>
          }

        </DashBoardPersons>
      </DashBoardLeft>

      <DashBoardRight>
        <DashBoardRightCon>

          <DashBoardRightDue>
            <DuesIcon style={{width:"50px", height:"50px"}}/>
            <DashBoardRightDueHeader>1,700,700</DashBoardRightDueHeader>
            <DashBoardRightDueSubHeader>Total Income this month</DashBoardRightDueSubHeader>
            <DashBoardRightDueButton onClick={displayAddDueModal}>
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