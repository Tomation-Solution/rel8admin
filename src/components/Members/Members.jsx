import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { getAllMembers } from '../../utils/api-calls'
import { AllMembersTable, MemberDashTable } from '../ActionComponents/ActionComponents1'
import DeleteMember from '../DashBoard/DeleteMember'
import Loading from '../Loading/Loading'
import { MembersContainer, MembersPaginationCon, MembersPaginationItem,
   MembersPersonList, MembersPersons, MembersPersonTab, MembersSearch,
    MembersSearchBtn, MembersSearchCompCon, MembersSearchInput } from './Members.styles'

const Members = () => {
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])
  const [showModal, setModal] = useState(false)
  const [ options, setOptions ] = useState("all")
  const [searchValue, setSearchValue] = useState("")
  
  const displayModal = () => {
    setModal(!showModal)
  }

  const {data,isLoading,isFetching,isError} = useQuery("all-members", getAllMembers, {
    refetchOnWindowFocus:false,
    select: data => data.data
  })
  
  const searchHandler = () => {
    const searchPattern = new RegExp(searchValue,"i")
    const result = data?.filter(item => (item.email.search(searchPattern) >=0 ))
    return result
  }

  const searchResult = searchHandler()

  return (
    <>
    {showModal && <DeleteMember close={displayModal}/>}
      <MembersContainer>
        <MembersPersonTab typex="dues">
          <MembersPersons typex="dues" filled={options==="all" ? "show" : ""} onClick={()=>setOptions("all")}>All Members</MembersPersons>
          {/* <MembersPersons typex="dues">Exco Members</MembersPersons>
          <MembersPersons typex="dues">Committe Members</MembersPersons>
          <MembersPersons typex="dues">All Chapters</MembersPersons> */}
        </MembersPersonTab>

        <MembersSearch>
          <MembersSearchCompCon>
            <MembersSearchInput value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search'/>
            <MembersSearchBtn onClick={searchHandler}>
              <SearchIcon style={{width:"15px",height:"15x"}}/>
            </MembersSearchBtn>
          </MembersSearchCompCon>

          {/* <AddNewBtn>Add New</AddNewBtn> */}
        </MembersSearch>

        <MembersPersonList>
          {
            searchResult?.length <= 0 ? 
            (isLoading || isFetching) ? <Loading loading={isLoading || isFetching}/> : (!isError) ? <MemberDashTable  show={showModal} deleteFn={displayModal} data={data}/> : <small>can't fetch members</small>
            :
            (isLoading || isFetching) ? <Loading loading={isLoading || isFetching}/> : (!isError) ? <MemberDashTable  show={showModal} deleteFn={displayModal} data={searchResult}/> : <small>can't fetch members</small>
          }
        </MembersPersonList>

        <MembersPaginationCon>
          <MembersPaginationItem>1</MembersPaginationItem>
          <MembersPaginationItem>2</MembersPaginationItem>
          <MembersPaginationItem>3</MembersPaginationItem>
          <MembersPaginationItem>4</MembersPaginationItem>
          <MembersPaginationItem>5</MembersPaginationItem>
          <MembersPaginationItem>6</MembersPaginationItem>
        </MembersPaginationCon>
      </MembersContainer>
    </>
  )
}

export default Members