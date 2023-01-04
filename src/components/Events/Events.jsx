import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { DeleteOnly } from '../ActionComponents/ActionComponents1'
import DeleteMember from '../DashBoard/DeleteMember'
import { AddNewBtn, MembersSearch, MembersSearchBtn,
   MembersSearchCompCon, MembersSearchInput } from '../Members/Members.styles'
import AddEvent from '../Modals/AddEvent'
import { EventsContainer, EventsHeader, EventsList } from './Events.styles'

const Events = () => {
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])
  const [deleteModal, setDeleteModal] = useState(false)
  const [addEvent, setAddEvent] = useState(false)

  const displayDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }
  const displayAddEvent = () => {
    setAddEvent(!addEvent)
  }

  return (
    <>
      {deleteModal && <DeleteMember close={displayDeleteModal}/>}
      {addEvent && <AddEvent close={displayAddEvent}/>}
      <EventsContainer>
          <EventsHeader>Events</EventsHeader>

          <MembersSearch>
            <MembersSearchCompCon>
              <MembersSearchInput placeholder='Search'/>
              <MembersSearchBtn>
                <SearchIcon style={{width:"15px",height:"15x"}}/>
              </MembersSearchBtn>
            </MembersSearchCompCon>

            <AddNewBtn onClick={displayAddEvent}>Add New</AddNewBtn>
          </MembersSearch>

          <EventsList>
              <DeleteOnly deleteFn={displayDeleteModal}/>
          </EventsList>

      </EventsContainer>
    </>
  )
}

export default Events