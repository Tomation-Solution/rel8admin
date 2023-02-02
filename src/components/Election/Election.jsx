import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { ElectionResultTable, ElectionTable } from '../ActionComponents/ActionComponents1'
import { EventsList } from '../Events/Events.styles'
import { AddNewBtn, MembersSearch, MembersSearchBtn, MembersSearchCompCon, MembersSearchInput } from '../Members/Members.styles'
import AddElection from '../Modals/AddElection'
import { ElectionContainer, ElectionOptions, ElectionOptionsItem, ElectionUploadReport, ElectionUploadReportHolder } from './Election.styles'

const Election = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const [options, setOptions] = useState("election-setup")
  const [searchValue, setSearchValue] = useState("")
  const [ setupModal, setHideSetupModal ] = useState(false)

  const data = []
  const searchHandler = () => {
    const searchPattern = new RegExp(searchValue,"i")
    const result = data?.filter(item => (item.name.search(searchPattern) >= 0))
    return result
  }

  const searchResult = searchHandler()

  const displayModal = () => {
    setHideSetupModal(!setupModal)
  }

  return (
    <>
      {setupModal && <AddElection close={displayModal}/>}
      <ElectionContainer>
          <ElectionOptions>
            <ElectionOptionsItem onClick={()=>setOptions("election-setup")} filled={options==="election-setup" ? "yes" : ""}>SETUP ELECTION</ElectionOptionsItem>
            <ElectionOptionsItem onClick={()=>setOptions("election-result")} filled={options==="election-result" ? "yes" : ""}>SEE ELECTION RESULTS</ElectionOptionsItem>
          </ElectionOptions>

          <MembersSearch>
            <MembersSearchCompCon>
              <MembersSearchInput value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search'/>
              <MembersSearchBtn onClick={searchHandler}>
                <SearchIcon style={{width:"15px",height:"15x"}}/>
              </MembersSearchBtn>
            </MembersSearchCompCon>

            <AddNewBtn onClick={displayModal}>Setup Election</AddNewBtn>
          </MembersSearch>

          {
            options==="election-setup" && 
          <EventsList>
            <ElectionTable />
            
          </EventsList>
          }

          {
            options==="election-result" && 
            <>
              <ElectionUploadReportHolder>
                <ElectionUploadReport>Upload Election Report</ElectionUploadReport>
              </ElectionUploadReportHolder>
              <EventsList>
                <ElectionResultTable />
              </EventsList>
            </>
          }

      </ElectionContainer>
    </>
  )
}

export default Election