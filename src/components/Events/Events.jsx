import React from 'react'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { NoAction } from '../ActionComponents/ActionComponents1'
import { AddNewBtn, MembersSearch, MembersSearchBtn,
   MembersSearchCompCon, MembersSearchInput } from '../Members/Members.styles'
import { EventsContainer, EventsHeader, EventsList } from './Events.styles'

const Events = () => {
  return (
    <EventsContainer>
        <EventsHeader>Events</EventsHeader>

        <MembersSearch>
          <MembersSearchCompCon>
            <MembersSearchInput placeholder='Search'/>
            <MembersSearchBtn>
              <SearchIcon style={{width:"15px",height:"15x"}}/>
            </MembersSearchBtn>
          </MembersSearchCompCon>

          <AddNewBtn>Add New</AddNewBtn>
        </MembersSearch>

        <EventsList>
            <NoAction />
        </EventsList>

    </EventsContainer>
  )
}

export default Events