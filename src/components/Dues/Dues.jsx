import React from 'react'
import { SearchIcon } from '../../assets/SideBar/svgs'
import { EditDeletOnly } from '../ActionComponents/ActionComponents1'
import MemberDetBox from '../DashBoard/MemberDetBox'
import { AddNewBtn, MembersPersonList, MembersPersons, MembersPersonTab, MembersSearch, MembersSearchBtn, MembersSearchCompCon, MembersSearchInput } from '../Members/Members.styles'
import { DuesContainer, DuesHighlight } from './Dues.styles'

const Dues = () => {
  return (
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

          <AddNewBtn>Add New</AddNewBtn>
        </MembersSearch>

        <MembersPersonList>
            <EditDeletOnly />
        </MembersPersonList>
    </DuesContainer>
  )
}

export default Dues