import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { getAllEvents } from '../../utils/api-calls'
import { EventsTable } from '../ActionComponents/ActionComponents1'
import Loading from '../Loading/Loading'
import { AddNewBtn, MembersSearch, MembersSearchBtn,
   MembersSearchCompCon, MembersSearchInput } from '../Members/Members.styles'
import AddEvent from '../Modals/AddEvent'
import { EventsContainer, EventsHeader, EventsList } from './Events.styles'

const Events = () => {
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])
  const [showModal, setModal] = useState(false)
  const [addEvent, setAddEvent] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const displayModal = () => {
    setModal(!showModal)
  }
  const displayAddEvent = () => {
    setAddEvent(!addEvent)
  }

  const {isLoading, isFetching, isError, data} = useQuery('all-events', getAllEvents, {
    refetchOnWindowFocus: false,
    select: data => data.data
  })

  const searchHandler = () => {
    const searchPattern = new RegExp(searchValue,"i")
    const result = data?.filter(item => (item.name.search(searchPattern) >= 0))
    return result
  }

  const searchResult = searchHandler()

  return (
    <>
      {addEvent && <AddEvent close={displayAddEvent}/>}
      <EventsContainer>
          <EventsHeader>Events</EventsHeader>

          <MembersSearch>
            <MembersSearchCompCon>
              <MembersSearchInput value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search'/>
              <MembersSearchBtn >
                <SearchIcon style={{width:"15px",height:"15x"}}/>
              </MembersSearchBtn>
            </MembersSearchCompCon>

            <AddNewBtn onClick={displayAddEvent}>Add New</AddNewBtn>
          </MembersSearch>

          <EventsList>
            {
              searchResult?.length <= 0 ?
              (isLoading || isFetching) ? <Loading loading={isLoading || isFetching}/> : (!isError) ? <EventsTable  show={showModal} deleteFn={displayModal} data={data}/> : <small>can't fetch events</small>
              :
              (isLoading || isFetching) ? <Loading loading={isLoading || isFetching}/> : (!isError) ? <EventsTable  show={showModal} deleteFn={displayModal} data={searchResult}/> : <small>can't fetch events</small>
            }
          </EventsList>

      </EventsContainer>
    </>
  )
}

export default Events