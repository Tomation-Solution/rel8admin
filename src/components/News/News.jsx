import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { getAllNews } from '../../utils/api-calls'
import { NewsTable } from '../ActionComponents/ActionComponents1'
import { EventsContainer, EventsHeader, EventsList } from '../Events/Events.styles'
import Loading from '../Loading/Loading'
import { AddNewBtn, MembersSearch, MembersSearchBtn, MembersSearchCompCon, MembersSearchInput } from '../Members/Members.styles'
import AddNews from '../Modals/AddNews'

const News = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const [showModal, setModal] = useState(false)
    const [addNews, setAddNews] = useState(false)
    const [searchValue, setSearchValue] = useState("")
  
    const displayModal = () => {
      setModal(!showModal)
    }
    const displayAddNewsModal = () => {
      setAddNews(!addNews)
    }

    const { isLoading:newsLoading, isFetching:newsFetching, isError:newsError, data:newsData } = useQuery("all-news", getAllNews, {
      refetchOnWindowFocus: false,
      select: data => data.data
    })

    const searchHandler = () => {
      const searchPattern = new RegExp(searchValue,"i")
      const result = newsData?.filter(item => (item.name.search(searchPattern) >= 0))
      return result
    }

    const searchResult = searchHandler()

  return (
    <>
    {addNews && <AddNews close={displayAddNewsModal}/>}
    <EventsContainer>
        <EventsHeader>News</EventsHeader>

        <MembersSearch>
          <MembersSearchCompCon>
            <MembersSearchInput value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search'/>
            <MembersSearchBtn onClick={searchHandler}>
              <SearchIcon style={{width:"15px",height:"15x"}}/>
            </MembersSearchBtn>
          </MembersSearchCompCon>

          <AddNewBtn onClick={displayAddNewsModal}>Add New</AddNewBtn>
        </MembersSearch>

        <EventsList>
          {
              searchResult?.length <= 0 ?
              (newsLoading || newsFetching) ? <Loading loading={newsLoading || newsFetching}/> : (!newsError) ? <NewsTable show={showModal} deleteFn={displayModal} data={newsData}/> : <small>can't fetch news</small>
              :
              (newsLoading || newsFetching) ? <Loading loading={newsLoading || newsFetching}/> : (!newsError) ? <NewsTable show={showModal} deleteFn={displayModal} data={searchResult}/> : <small>can't fetch news</small>
          }
        </EventsList>

    </EventsContainer>
  </>
  )
}

export default News