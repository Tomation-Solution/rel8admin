import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { DeleteOnly } from '../ActionComponents/ActionComponents1'
import DeleteMember from '../DashBoard/DeleteMember'
import MemberDetBox from '../DashBoard/MemberDetBox'
import { AddNewBtn, MembersPersonList, MembersPersons, MembersPersonTab,
   MembersSearch, MembersSearchBtn, MembersSearchCompCon,
    MembersSearchInput } from '../Members/Members.styles'
import { DuesContainer, DuesHighlight } from './Dues.styles'
import AddDue from '../Modals/AddDue'

const Dues = () => {
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])

  const [deleteModal, setDeleteModal] = useState(false)
  const [addDueModal, setAddDueModal] = useState(false)

  const displayAddDueModal = () => {
    setAddDueModal(!addDueModal)
  }

  const displayDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }
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
            <MembersPersons typex="dues">All Dues</MembersPersons>
            <MembersPersons>Members Owning</MembersPersons>
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
              <DeleteOnly deleteFn={displayDeleteModal}/>
          </MembersPersonList>
      </DuesContainer>
    </>
  )
}

export default Dues