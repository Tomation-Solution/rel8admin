import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { DeleteOnly } from '../ActionComponents/ActionComponents1'
import DeleteMember from '../DashBoard/DeleteMember'
import { EventsContainer, EventsHeader, EventsList } from '../Events/Events.styles'
import { AddNewBtn, MembersSearch, MembersSearchBtn, MembersSearchCompCon, MembersSearchInput } from '../Members/Members.styles'

const News = () => {
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
    <EventsContainer>
        <EventsHeader>News</EventsHeader>

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
            <DeleteOnly deleteFn={displayDeleteModal}/>
        </EventsList>

    </EventsContainer>
  </>
  )
}

export default News