import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { rel8Pink, rel8Purple, rel8White } from '../../globals'
import { deleteDue } from '../../utils/api-calls'

const BackDrop = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SubCon = styled.div`
    background-color: ${rel8White};
    width: 50%;
    overflow-y: auto;
    height: 500px;
    border-radius: 10px;
    padding: 20px;
`
const SubConHeader = styled.p`
    font-weight: 700;
    text-align: center;
`
const SubConHeader2 = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
`
const SubConBtnHold = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;
`
const SubConBtn = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: ${props=>props.typex==="filled" ? `${rel8Purple}`:`${rel8Pink}`};
    color: ${props=>props.typex==="filled" ? `${rel8White}`:`${rel8Purple}`};
    cursor: pointer;
`
const TitleCon = styled.span`
    color: ${rel8Purple};
    font-weight: 700;
`
const PhotoHolderCon = styled.div`
    display: flex;
    justify-content: center;
`
const PhotoHolder = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin: 20px 10px;
`

export const AllDuesViewMore = ({ data, close }) => {
    const queryClient = useQueryClient()

    const { isLoading, mutate} = useMutation((dueId)=>deleteDue(dueId), {
        onMutate: () => {
            toast.info("Due Deletion in progress",{progressClassName:"toastProgress",icon:false})
        },
        onSuccess: () => {
            toast.success("Deleted Successfully", {progressClassName:"toastProgress",icon:false})
            queryClient.invalidateQueries("all-dues")
            close()
        },
        onError: () => {
            toast.error("Can't delete due")
        }
    })

    const deleteDues = (id) => {
        mutate(id)
    }

    return (
    <BackDrop>
        <style>
            {`
                body{
                    overflow:hidden;
                }
            `}
        </style>
        <SubCon>
            <SubConHeader>More Details</SubConHeader>
            {data ? 
            <>
                <SubConHeader2><TitleCon>Id: </TitleCon> {data.id}</SubConHeader2>
                <SubConHeader2> <TitleCon>Name: </TitleCon> {data.Name}</SubConHeader2>
                <SubConHeader2> <TitleCon>Amount: </TitleCon> {Number(data.amount).toLocaleString("en-US")}</SubConHeader2>
                <SubConHeader2> <TitleCon>Chapter: </TitleCon> {data.chapter}</SubConHeader2>
                <SubConHeader2> <TitleCon>End Date: </TitleCon> {data.endDate}</SubConHeader2>
                <SubConHeader2> <TitleCon>Is for Exco: </TitleCon> {data.is_for_excos}</SubConHeader2>
                <SubConHeader2> <TitleCon>Is Reoccurring: </TitleCon> {data.re_occuring}</SubConHeader2>
                <SubConHeader2> <TitleCon>Schedule Type: </TitleCon> {data.scheduletype}</SubConHeader2>
                <SubConHeader2> <TitleCon>Start Date: </TitleCon> {data.startDate}</SubConHeader2>
                <SubConHeader2> <TitleCon>Start Time: </TitleCon> {data.startTime}</SubConHeader2>
                <SubConHeader2> <TitleCon>Schedule: </TitleCon> {data.schedule.map(item => {
                    let list = []
                    if(data.scheduletype === "day_of_week"){
                        if(item === "0") {list.push("Sunday")}
                        if(item === "1") {list.push("Monday")}
                        if(item === "2") {list.push("Tuesday")}
                        if(item === "3") {list.push("Wednesday")}
                        if(item === "4") {list.push("Thursday")}
                        if(item === "5") {list.push("Friday")}
                        if(item === "6") {list.push("Saturday")}
                    }
                    else if(data.scheduletype === "month_of_year") {
                        if(item === "0") {list.push("January")}
                        if(item === "1") {list.push("February")}
                        if(item === "2") {list.push("March")}
                        if(item === "3") {list.push("April")}
                        if(item === "4") {list.push("May")}
                        if(item === "5") {list.push("June")}
                        if(item === "6") {list.push("July")}
                        if(item === "7") {list.push("August")}
                        if(item === "8") {list.push("September")}
                        if(item === "9") {list.push("October")}
                        if(item === "10") {list.push("November")}
                        if(item === "11") {list.push("December")}
                    }
                    return list
                }).join(',') }</SubConHeader2>
                
            </>
            : 
            <small>Can't fetch additional Due Info.</small>}
            <SubConBtnHold>
                <SubConBtn typex="filled" onClick={()=>deleteDues(data.id)} disabled={isLoading}>Delete</SubConBtn>
                <SubConBtn onClick={close} disabled={isLoading}>Close</SubConBtn>
            </SubConBtnHold>
        </SubCon>
    </BackDrop>
  )
}

export const MembersDuesViewMore = ({ data, close }) => {
    const queryClient = useQueryClient()

    const { isLoading, mutate} = useMutation((dueId)=>deleteDue(dueId), {
        onMutate: () => {
            toast.info("Member Due Deletion in progress",{progressClassName:"toastProgress",icon:false})
        },
        onSuccess: () => {
            toast.success("Member Due Deleted Successfully", {progressClassName:"toastProgress",icon:false})
            queryClient.invalidateQueries("all-dues")
            close()
        },
        onError: () => {
            toast.error("Can't Delete Member Due")
        }
    })

    const deleteDues = (id) => {
        mutate(id)
    }
    return(

            <BackDrop>
            <style>
                {`
                    body{
                        overflow:hidden;
                    }
                `}
            </style>
            <SubCon>
                <SubConHeader>More Details</SubConHeader>
                {data ? 
                <>
                    <PhotoHolderCon> <PhotoHolder alt='' src={data.photo}/> </PhotoHolderCon> 
                    <SubConHeader2><TitleCon>Id: </TitleCon> {data.id}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Email: </TitleCon> {data.email}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Amount Owing: </TitleCon> {data.amount_owing}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Is Exco: </TitleCon> {data.is_exco}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Is Financial: </TitleCon> {data.is_financial}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Alumni Year: </TitleCon> {data.alumni_year}</SubConHeader2>
                    <SubConHeader2> <TitleCon>User: </TitleCon> {data.user}</SubConHeader2>
                    
                </>
                : 
                <small>Can't fetch additional Due Info.</small>}
                <SubConBtnHold>
                    <SubConBtn typex="filled" onClick={()=>deleteDues(data.id)} disabled={isLoading}>Delete</SubConBtn>
                    <SubConBtn onClick={close} disabled={isLoading}>Close</SubConBtn>
                </SubConBtnHold>
            </SubCon>
        </BackDrop>
    )
}