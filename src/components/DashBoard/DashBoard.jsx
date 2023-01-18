import React, { useEffect } from 'react'
import { useState } from 'react'
import { DuesIcon, PlusCircleIcon } from '../../assets/SideBar/svgs'
import { ExcoDashTable, MemberDashTable } from '../ActionComponents/ActionComponents1'
import { DashBoardContainer, DashBoardHeaders, DashBoardHeadersItem, DashBoardLeft,
   DashBoardMemberCon, DashBoardPersons, DashBoardRight, DashBoardRightCon,
    DashBoardRightDue, DashBoardRightDueButton,
     DashBoardRightDueHeader, DashBoardRightDueSubHeader } from './DashBoard.styles'
import DeleteMember from './DeleteMember'
import MemberDetBox from './MemberDetBox'
import AddDue from '../Modals/AddDue'
import { useQuery } from 'react-query'
import { getAdminDashBoardDetails, getAllExcos, getAllMembers } from '../../utils/api-calls'
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
    select: data => data.data

  })
  const { isLoading:memLoading, isFetching:memFetching, data:memData, isError:memIsError } = useQuery('all-members', getAllMembers, {
    refetchOnWindowFocus:false,
    select: data => data.data.reverse()

  })
  const { isLoading:adminDashLoading, isFetching:adminDashFetching, data:adminDashData, isError:adminDashIsError } = useQuery("admin-dashboard-info", getAdminDashBoardDetails, {
    refetchOnWindowFocus: false,
    select: data => data.data[0]
  })

  const dashboardSummary = []

  if(adminDashData){
    for( let [key, value] of Object.entries(adminDashData) ){
      let info = {[key]:value}
      dashboardSummary.push(info)
    }
  }

  
  // console.log(excoData)
  // console.log("ALL MEMBERS",memData)
  return (
    <>
    
    {addDueModal && <AddDue close={displayAddDueModal}/>}
    <DashBoardContainer>
      <DashBoardLeft>
        <DashBoardMemberCon>
          {
            (adminDashLoading || adminDashFetching) ?
            <Loading loading={adminDashLoading || adminDashFetching}/>
            :
            (!adminDashIsError) ? dashboardSummary.map((item, index) => <MemberDetBox key={index} data={{header: Object.values(item)[0], subheader: Object.keys(item)[0].replace(/_/g,' ').toUpperCase()}}/>) 
            : <small>can't fetch summary data</small>
          }
        </DashBoardMemberCon>

        <DashBoardPersons>
          <DashBoardHeaders>
            <DashBoardHeadersItem onClick={()=>setOptions("exco")} filled={options === "exco" ? "show" : ""}>Excos</DashBoardHeadersItem>
            <DashBoardHeadersItem onClick={()=>setOptions("mem")} filled={options === "mem" ? "show" : ""}>Members</DashBoardHeadersItem>
          </DashBoardHeaders>

          {
            options==="exco" ? 
            (excoLoading || excoFetching) ? <Loading loading={excoLoading || excoFetching}/> : (!excoIsError) ? (<ExcoDashTable deleteFn={displayModal}/>) : <small>cant fetch excos</small>
            : 
            (memLoading || memFetching) ? <Loading loading={memLoading || memFetching}/> : (!memIsError) ? <MemberDashTable data={memData} deleteFn={displayModal} show={showModal}/> : <small>cant fetch members</small>
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