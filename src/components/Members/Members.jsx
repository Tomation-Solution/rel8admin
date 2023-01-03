import React, { useState } from 'react'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { EditDeleteWriteOnly } from '../ActionComponents/ActionComponents1'
import DeleteMember from '../DashBoard/DeleteMember'
import AddMember from './AddMember'
import EditMember from './EditMember'
import { AddNewBtn, MembersContainer, MembersPaginationCon, MembersPaginationItem, MembersPersonList, MembersPersons, MembersPersonTab, MembersSearch, MembersSearchBtn, MembersSearchCompCon, MembersSearchInput } from './Members.styles'

const Members = () => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [addModal, setAddModal] = useState(false)

  const displayDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }
  const displayEditModal = () => {
    setEditModal(!editModal)
  }
  const displayAddModal = () => {
    setAddModal(!addModal)
  }
  return (
    <>
    {deleteModal && <DeleteMember close={displayDeleteModal}/>}
    {editModal && <EditMember close={displayEditModal}/>}
    {addModal && <AddMember close={displayAddModal}/>}
      <MembersContainer>
        <MembersPersonTab>
          <MembersPersons>All Members</MembersPersons>
          <MembersPersons>Exco Members</MembersPersons>
          <MembersPersons>Committe Members</MembersPersons>
        </MembersPersonTab>

        <MembersSearch>
          <MembersSearchCompCon>
            <MembersSearchInput placeholder='Search'/>
            <MembersSearchBtn>
              <SearchIcon style={{width:"15px",height:"15x"}}/>
            </MembersSearchBtn>
          </MembersSearchCompCon>

          <AddNewBtn>Add New</AddNewBtn>
        </MembersSearch>

        <MembersPersonList>
          <EditDeleteWriteOnly deleteFn={displayDeleteModal} editFn={displayEditModal} writeFn={displayAddModal}/>
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