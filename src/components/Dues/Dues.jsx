import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { AllDuesDel, DeleteOnly, MemDuesDel } from '../ActionComponents/ActionComponents1'
import DeleteMember from '../DashBoard/DeleteMember'
import MemberDetBox from '../DashBoard/MemberDetBox'
import { AddNewBtn, MembersPersonList, MembersPersons, MembersPersonTab,
   MembersSearch, MembersSearchBtn, MembersSearchCompCon,
    MembersSearchInput } from '../Members/Members.styles'
import { DuesContainer, DuesHighlight } from './Dues.styles'
import AddDue from '../Modals/AddDue'
import Loading from '../Loading/Loading'
import { useQuery } from 'react-query'
import { getAllDues, getMemberDues } from '../../utils/api-calls'
import { toast } from 'react-toastify'

const Dues = () => {
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])

  const [deleteModal, setDeleteModal] = useState(false)
  const [addDueModal, setAddDueModal] = useState(false)

  const [options, setOptions] = useState("all")

  const displayAddDueModal = () => {
    setAddDueModal(!addDueModal)
  }

  const displayDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  const {isLoading:allLoading, isFetching:allFetching, isError:allIsError, data:allData} = useQuery("all-dues", getAllDues, {
    refetchOnWindowFocus: false,
    onError: () => {
      toast.error("An error occurred while fetching all dues")
    }
  })

  const {isLoading:memLoading, isFetching:memFetching, isError:memIsError, data:memData} = useQuery("member-dues", getMemberDues, {
    refetchOnWindowFocus: false,
    onError: () => {
      toast.error("An error occurred while fetching member dues")
    }
  })

  console.log(allData)
  console.log("memData",memData)

  return (
    <>
      {deleteModal && <DeleteMember close={displayDeleteModal}/>}
      {addDueModal && <AddDue close={displayAddDueModal}/>}
      <DuesContainer>
          <DuesHighlight>
              <MemberDetBox cirColor={"red"} data={{header:"$20,000", subheader:"Membership"}}/>
              <MemberDetBox data={{header:"$20,000", subheader:"Membership"}}/>
              <MemberDetBox data={{header:"$20,000", subheader:"Membership"}}/>
          </DuesHighlight>


            <MembersPersonTab typex="dues">
              <MembersPersons onClick={()=>setOptions("all")} typex="dues" filled={ options === "all" ? "show":"" }>All Dues</MembersPersons>
              <MembersPersons onClick={()=>setOptions("mem")} filled={ options === "mem" ? "show":"" }>Members Owning</MembersPersons>
            </MembersPersonTab>

            <MembersSearch>
              <MembersSearchCompCon>
                <MembersSearchInput placeholder='Search'/>
                <MembersSearchBtn>
                  <SearchIcon style={{width:"15px",height:"15x"}}/>
                </MembersSearchBtn>
              </MembersSearchCompCon>

              <AddNewBtn onClick={displayAddDueModal}>Add New</AddNewBtn>
            </MembersSearch>

            <MembersPersonList>
                {
                  options === "all" ? 
                  (allLoading || allFetching) ? <Loading loading={allLoading}/> : (!allIsError) ? <AllDuesDel deleteFn={displayDeleteModal}/> : <p>can't load all dues</p>
                  :
                  (memLoading || memFetching) ? <Loading loading={memLoading} /> : (!memIsError) ? <MemDuesDel deleteFn={displayDeleteModal}/> :
                  <p>can't load member dues</p>
                }
            </MembersPersonList>

      </DuesContainer>
    </>
  )
}

export default Dues