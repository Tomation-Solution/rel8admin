import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { DeleteOnly } from '../ActionComponents/ActionComponents1'
import DeleteMember from '../DashBoard/DeleteMember'
import { MembersContainer, MembersPaginationCon, MembersPaginationItem,
   MembersPersonList, MembersPersons, MembersPersonTab, MembersSearch,
    MembersSearchBtn, MembersSearchCompCon, MembersSearchInput } from './Members.styles'

const Members = () => {
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])
  const [deleteModal, setDeleteModal] = useState(false)
  
  const displayDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }
  return (
    <>
    {deleteModal && <DeleteMember close={displayDeleteModal}/>}
      <MembersContainer>
        <MembersPersonTab typex="dues">
          <MembersPersons typex="dues">All Members</MembersPersons>
          <MembersPersons typex="dues">Exco Members</MembersPersons>
          <MembersPersons typex="dues">Committe Members</MembersPersons>
          <MembersPersons typex="dues">All Chapters</MembersPersons>
        </MembersPersonTab>

        <MembersSearch>
          <MembersSearchCompCon>
            <MembersSearchInput placeholder='Search'/>
            <MembersSearchBtn>
              <SearchIcon style={{width:"15px",height:"15x"}}/>
            </MembersSearchBtn>
          </MembersSearchCompCon>

          {/* <AddNewBtn>Add New</AddNewBtn> */}
        </MembersSearch>

        <MembersPersonList>
          <DeleteOnly deleteFn={displayDeleteModal}/>
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