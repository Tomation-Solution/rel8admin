import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { AllDuesTable, MemDuesTable } from '../ActionComponents/ActionComponents1'
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

  const [viewMoreDuesInfo, setViewMoreDuesInfo] = useState(false)
  const [addDueModal, setAddDueModal] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  
  const [options, setOptions] = useState("all")
  
  const displayAddDueModal = () => {
    setAddDueModal(!addDueModal)
  }
  
  const displayViewMoreDuesInfo = () => {
    setViewMoreDuesInfo(!viewMoreDuesInfo)
  }

  const {isLoading:allLoading, isFetching:allFetching, isError:allIsError, data:allData} = useQuery("all-dues", getAllDues, {
    refetchOnWindowFocus: false,
    select: data => data.data,
    onError: () => {
      toast.error("An error occurred while fetching all dues")
    }
  })

  const {isLoading:memLoading, isFetching:memFetching, isError:memIsError, data:memData} = useQuery("member-dues", getMemberDues, {
    refetchOnWindowFocus: false,
    select: data => data.data,
    onError: () => {
      toast.error("An error occurred while fetching member dues")
    }
  })

  const searchHandler = () => {
    if(options === "all"){
      const searchPattern = new RegExp(searchValue,"i")
      const result = allData?.filter(item => (item.Name.search(searchPattern) >= 0))
      return result
    }
    else if(options === "mem") {
      const searchPattern = new RegExp(searchValue,"i")
      const result = memData?.filter(item => (item.email.search(searchPattern) >= 0))
      return result
    }
  }

  const searchResult = searchHandler()

  return (
    <>
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
                <MembersSearchInput placeholder={options === "all" ?  "Search by name":"Search by email" } value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                <MembersSearchBtn onClick={searchHandler}>
                  <SearchIcon style={{width:"15px",height:"15x"}}/>
                </MembersSearchBtn>
              </MembersSearchCompCon>

              <AddNewBtn onClick={displayAddDueModal}>Add New</AddNewBtn>
            </MembersSearch>

            <MembersPersonList>
                {
                  searchResult?.length <= 0 ? 

                  options === "all" ? 
                  (allLoading || allFetching) ? <Loading loading={allLoading}/> : (!allIsError) ? <AllDuesTable data={allData} show={viewMoreDuesInfo} deleteFn={displayViewMoreDuesInfo}/> : <p>can't load all dues</p>
                  :
                  (memLoading || memFetching) ? <Loading loading={memLoading} /> : (!memIsError) ? <MemDuesTable data={memData} show={viewMoreDuesInfo} deleteFn={displayViewMoreDuesInfo}/> :
                  <p>can't load member dues</p>

                  :
                  options === "all" ? 
                  (allLoading || allFetching) ? <Loading loading={allLoading}/> : (!allIsError) ? <AllDuesTable data={searchResult} show={viewMoreDuesInfo} deleteFn={displayViewMoreDuesInfo}/> : <p>can't load all dues</p>
                  :
                  (memLoading || memFetching) ? <Loading loading={memLoading} /> : (!memIsError) ? <MemDuesTable data={searchResult} show={viewMoreDuesInfo} deleteFn={displayViewMoreDuesInfo}/> :
                  <p>can't load member dues</p>

                }
            </MembersPersonList>

      </DuesContainer>
    </>
  )
}

export default Dues