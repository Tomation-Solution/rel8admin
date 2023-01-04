import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { DeleteOnly } from '../ActionComponents/ActionComponents1'
import DeleteMember from '../DashBoard/DeleteMember'
import { EventsContainer, EventsHeader, EventsList } from '../Events/Events.styles'
import { AddNewBtn, MembersSearch, MembersSearchBtn, MembersSearchCompCon, MembersSearchInput } from '../Members/Members.styles'
import AddPublications from '../Modals/AddPublications'

const Publications = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const [deleteModal, setDeleteModal] = useState(false)
    const [addPublicModal, setAddPublicModal] = useState(false)
  
    const displayDeleteModal = () => {
      setDeleteModal(!deleteModal)
    }
    const displayPublicModal = () => {
      setAddPublicModal(!addPublicModal)
    }
  return (
    <>
    {deleteModal && <DeleteMember close={displayDeleteModal}/>}
    {addPublicModal && <AddPublications close={displayPublicModal}/>}
    <EventsContainer>
        <EventsHeader>Publications</EventsHeader>

        <MembersSearch>
          <MembersSearchCompCon>
            <MembersSearchInput placeholder='Search'/>
            <MembersSearchBtn>
              <SearchIcon style={{width:"15px",height:"15x"}}/>
            </MembersSearchBtn>
          </MembersSearchCompCon>

          <AddNewBtn onClick={displayPublicModal}>Add New</AddNewBtn>
        </MembersSearch>

        <EventsList>
            <DeleteOnly deleteFn={displayDeleteModal}/>
        </EventsList>

    </EventsContainer>
  </>
  )
}

export default Publications