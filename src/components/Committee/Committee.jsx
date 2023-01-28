import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { getAllCommittee } from '../../utils/api-calls'
import { CommitteeTable } from '../ActionComponents/ActionComponents1'
import Loading from '../Loading/Loading'
import { AddNewBtn, MembersSearch, MembersSearchBtn, MembersSearchCompCon, MembersSearchInput } from '../Members/Members.styles'
import AddCommittee from '../Modals/AddCommittee'
import { CommitteeContainer, CommitteeHeader, CommitteeList } from './Committee.styles'

const Committee = () => {
  const [searchValue, setSearchValue] = useState("")
  const [showAddCommittee, setShowAddCommittee] = useState(false)
  const [showModal, setModal] = useState(false)

  const displayCommitteeModal = () => {
    setShowAddCommittee(!showAddCommittee)
  }

  const displayModal = () => {
    setModal(!showModal)
  }

  const { isLoading, isError, isFetching, data } = useQuery("all-committees", getAllCommittee, {
    refetchOnWindowFocus: false,
    select: data=> {
      return data.data.sort((a,b)=>a.id - b.id)
    }
  })

  const searchHandler = () => {
    const searchPattern = new RegExp(searchValue,"i")
    const result = data?.filter(item => (item.name.search(searchPattern) >= 0))
    return result
  }

  const searchResult = searchHandler()
  return (
    <>
      {showAddCommittee && <AddCommittee close={displayCommitteeModal}/>}

      <CommitteeContainer>
        <CommitteeHeader>Committee</CommitteeHeader>

            <MembersSearch>
              <MembersSearchCompCon>
                <MembersSearchInput value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search by name'/>
                <MembersSearchBtn onClick={searchHandler}>
                  <SearchIcon style={{width:"15px",height:"15x"}}/>
                </MembersSearchBtn>
              </MembersSearchCompCon>

              <AddNewBtn onClick={displayCommitteeModal}>Add New</AddNewBtn>
            </MembersSearch>

            <CommitteeList>

              {
              searchResult?.length <= 0 ?
              (isLoading || isFetching) ? <Loading loading={isLoading || isFetching}/> : (!isError) ? <CommitteeTable  show={showModal} deleteFn={displayModal} data={data}/> : <small>can't fetch committees</small>
              :
              (isLoading || isFetching) ? <Loading loading={isLoading || isFetching}/> : (!isError) ? <CommitteeTable  show={showModal} deleteFn={displayModal} data={searchResult}/> : <small>can't fetch committees</small>
            }
            </CommitteeList>

      </CommitteeContainer>
    </>
  )
}

export default Committee