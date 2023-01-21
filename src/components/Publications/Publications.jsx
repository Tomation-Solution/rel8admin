import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { getAllPublications } from '../../utils/api-calls'
import { PublicationTable } from '../ActionComponents/ActionComponents1'
import { EventsContainer, EventsHeader, EventsList } from '../Events/Events.styles'
import Loading from '../Loading/Loading'
import { AddNewBtn, MembersSearch, MembersSearchBtn, MembersSearchCompCon, MembersSearchInput } from '../Members/Members.styles'
import AddPublications from '../Modals/AddPublications'

const Publications = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const [showModal, setModal] = useState(false)
    const [addPublicModal, setAddPublicModal] = useState(false)
    const [searchValue, setSearchValue] = useState("")
  
    const displayModal = () => {
      setModal(!showModal)
    }
    const displayPublicModal = () => {
      setAddPublicModal(!addPublicModal)
    }

    const { isLoading:pubLoading, isFetching:pubFetching, isError:pubError, data:pubData } = useQuery("all-publications", getAllPublications, {
      refetchOnWindowFocus: false,
      select: data => data.data
    })

    const searchHandler = () => {
      const searchPattern = new RegExp(searchValue,"i")
      const result = pubData?.filter(item => (item.name.search(searchPattern) >= 0))
      return result
    }

    const searchResult = searchHandler()

  return (
    <>
    {addPublicModal && <AddPublications close={displayPublicModal}/>}
    <EventsContainer>
        <EventsHeader>Publications</EventsHeader>

        <MembersSearch>
          <MembersSearchCompCon>
            <MembersSearchInput value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search'/>
            <MembersSearchBtn onClick={searchHandler}>
              <SearchIcon style={{width:"15px",height:"15x"}}/>
            </MembersSearchBtn>
          </MembersSearchCompCon>

          <AddNewBtn onClick={displayPublicModal}>Add New</AddNewBtn>
        </MembersSearch>

        <EventsList>
          {
              searchResult?.length <= 0 ?
              (pubLoading || pubFetching) ? <Loading loading={pubLoading || pubFetching}/> : (!pubError) ? <PublicationTable show={showModal} deleteFn={displayModal} data={pubData}/> : <small>can't fetch publications</small>
              :
              (pubLoading || pubFetching) ? <Loading loading={pubLoading || pubFetching}/> : (!pubError) ? <PublicationTable show={showModal} deleteFn={displayModal} data={searchResult}/> : <small>can't fetch publications</small>
          }
        </EventsList>

    </EventsContainer>
  </>
  )
}

export default Publications