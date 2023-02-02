import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { PlusCircleIcon } from '../../assets/SideBar/svgs'
import { rel8Black, rel8Blue, rel8Pink, rel8Purple, rel8White } from '../../globals'
import { Desktop, K4, Laptop, mobile } from '../../responsive'
import { addMoreMembtoCommittee, deleteDue, deleteEvents, deleteNews, deletePublication, getAllMembers, updateCommittee, updateEvent } from '../../utils/api-calls'
import Loading from '../Loading/Loading'
import ImageToShow from '../../assets/UploadImage.png'

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
const VertSpaceBetween = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${rel8White};
    width: 50%;
    overflow-y: auto;
    height: 500px;
    border-radius: 10px;
    padding: 20px;
    ${
        Laptop({
            width: "30%",
        })
    }
    ${
        Desktop({
            width: "30%",
        })
    }
    ${
        K4({
            width: "30%",
        })
    }
`
const TopCon = styled.div``
const AddCircleText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    margin: 10px 0px;
`
const SubCon = styled.div`
    background-color: ${rel8White};
    width: 50%;
    overflow-y: auto;
    height: 500px;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    ${
        Laptop({
            width: "30%",
        })
    }
    ${
        Desktop({
            width: "40%",
        })
    }
    ${
        K4({
            width: "40%",
        })
    }
`
const LeftSubCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${rel8White};
    width: 50%;
    overflow-y: auto;
    height: 500px;
    border-radius: 10px;
    padding: 20px;
    ${
        Laptop({
            width: "30%",
        })
    }
    ${
        Desktop({
            width: "30%",
        })
    }
    ${
        K4({
            width: "30%",
        })
    }
`
const SubConHeader = styled.p`
    font-weight: 700;
    text-align: center;
    margin-top: ${props=>props.spaced === "spaced" ? "50px" : ""};
`
const SubConHeader2 = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    /* text-align: center; */
    font-size: 14px;
`
const SubConBtnHold = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;
    ${
        mobile({
            flexDirection: "column",
        })
    }
`
const SubConBtn = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: ${props=>props.typex==="filled" ? `${rel8Purple}`:`${rel8Pink}`};
    color: ${props=>props.typex==="filled" ? `${rel8White}`:`${rel8Purple}`};
    cursor: pointer;
    margin: 5px;
    ${
        mobile({
            margin: "10px 0px",
        })
    }
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
const ParagraphHeading = styled.p`
    font-size: 14px;
    margin-top: 20px;
    text-decoration: underline;
    /* text-align: center; */
`
const OptionHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${rel8Purple};
    padding-bottom: 10px;
    margin-bottom: 30px;

    ${
        mobile({
            flexDirection: "column"
        })
    }
`
const OptionItems = styled.span`
    font-size: 14px;
    color: ${rel8Purple};
    font-weight: ${props=>props.selected==="select" ?  700 : 400};
    margin: 10px;
    text-align: center;
    cursor: pointer;
`
const CommitteeList = styled.div`
    text-align: center;
    margin: 10px 0px;
`
const CommitteeListItem = styled.p`
    margin: 5px 0px;
`
const CommitteeListSpan = styled.span`
    margin-right: 5px;
`
const Form = styled.form`
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
`
const FormTextArea = styled.textarea`
    padding: 5px 0px;
    background-color: transparent;
    border: none;
    border: 1px solid ${rel8Purple};
    border-radius: 5px;
    padding: 5px;
    color: ${rel8Purple};
    outline: none;
    &::placeholder{
        color: ${rel8Purple};
    }
`
const FormDataComp = styled.input`
    padding: 5px 0px;
    background-color: transparent;
    border: none;
    border: 1px solid ${rel8Purple};
    border-radius: 5px;
    padding: 5px;
    color: ${rel8Purple};
    outline: none;
    &::placeholder{
        color: ${rel8Purple};
    }
`
const FormSelection = styled.select`
    padding: 5px 0px;
    color: ${rel8Purple};
    outline: none;
    border: none;
    border-bottom: 1px solid ${rel8Purple};
    margin: 10px 0px;
    overflow: auto;
`
const FormOption = styled.option``
const FormLabel =  styled.label`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin: 10px 0px;
`
const SubConBtnInput = styled.input`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: ${props=>props.typex==="filled" ? `${rel8Purple}`:`${rel8Pink}`};
    color: ${props=>props.typex==="filled" ? `${rel8White}`:`${rel8Purple}`};
    cursor: pointer;
`
const CommitteeDetails = styled.div`
    display: flex;
    flex-direction: column;
`
const CommitteeUpdate = styled.div``
const CommitteeAdd = styled.div``

const DeleteButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: ${props=>props.typex==="filled" ? `${rel8Purple}`:`${rel8Pink}`};
    color: ${props=>props.typex==="filled" ? `${rel8White}`:`${rel8Purple}`};
    cursor: pointer;
    margin-top: ${props=>props.mt==="filledup" ? "20px" : ""};
`
const SmallTitle = styled.p`
    font-size: 14px;
    text-align: center;
    margin: 10px 0px;
`
const ElectionResultGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    margin: 20px 0px;
    ${
        mobile({
            gridTemplateColumns: "auto",
        })
    }
`
const ElectionResultGridItem = styled.div`
    background-color: ${rel8Blue};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px 0px;
`
const ElectionResultGridImage = styled.img`
    height: 100px;
    object-fit: contain;
`
const ElectionResultGridText = styled.div`
    padding: 10px;
`
const ElectionResultGridTextHeading1 = styled.p`
    color: ${rel8Purple};
`
const ElectionResultGridTextHeading2  = styled.p`
    color: ${rel8Purple};
`
const ElectionResultGridTextSmall = styled.span`
    font-size: 12px;
    color: ${rel8Black};
`


//ALL DUES OR PAYMENTS
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
        <LeftSubCon>
            <SubConHeader>More Details</SubConHeader>
            {data ? 
            <>
                <SubConHeader2><TitleCon>Id: </TitleCon> {data.id}</SubConHeader2>
                <SubConHeader2> <TitleCon>Name: </TitleCon> {data.Name}</SubConHeader2>
                <SubConHeader2> <TitleCon>Amount: </TitleCon> {Number(data.amount).toLocaleString("en-US")}</SubConHeader2>
                <SubConHeader2> <TitleCon>Chapter: </TitleCon> {data.chapter}</SubConHeader2>
                <SubConHeader2> <TitleCon>End Date: </TitleCon> {data.endDate}</SubConHeader2>
                <SubConHeader2> <TitleCon>Is for Exco: </TitleCon> {data.is_for_excos ? "yes": "no"}</SubConHeader2>
                <SubConHeader2> <TitleCon>Start Date: </TitleCon> {data.startDate}</SubConHeader2>
                <SubConHeader2> <TitleCon>Is Reoccurring: </TitleCon> {data.re_occuring ? "yes": "no"}</SubConHeader2>
                <SubConHeader2> <TitleCon>Schedule Type: </TitleCon> {data.scheduletype}</SubConHeader2>
                <SubConHeader2> <TitleCon>Start Date: </TitleCon> {data.startDate}</SubConHeader2>
                <SubConHeader2> <TitleCon>Start Time: </TitleCon> {data.startTime}</SubConHeader2>
                <SubConHeader2> <TitleCon>Schedule: </TitleCon> {Array.isArray(data.schedule) ? data.schedule.map(item => {
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
                }).join(',') : <span>{data.schedule}</span> }</SubConHeader2>
                
            </>
            : 
            <small>Can't fetch additional Due Info.</small>}
            <SubConBtnHold>
                <SubConBtn typex="filled" onClick={()=>deleteDues(data.id)} disabled={isLoading}>Delete</SubConBtn>
                <SubConBtn onClick={close} disabled={isLoading}>Close</SubConBtn>
            </SubConBtnHold>
        </LeftSubCon>
    </BackDrop>
  )
}

//MEMBERS
export const MembersDuesViewMore = ({ data, close }) => {
    return(

            <BackDrop>
            <style>
                {`
                    body{
                        overflow:hidden;
                    }
                `}
            </style>
            <LeftSubCon>
                <SubConHeader>More Details</SubConHeader>
                {data ? 
                <>
                    <PhotoHolderCon> <PhotoHolder alt='' src={data.photo}/> </PhotoHolderCon> 
                    <SubConHeader2><TitleCon>Id: </TitleCon> {data.id}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Email: </TitleCon> {data.email}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Amount Owing: </TitleCon> {Number(data.amount_owing).toLocaleString("en-US")}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Is Exco: </TitleCon> {data.is_exco ? "yes": "no"}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Is Financial: </TitleCon> {data.is_financial ? "yes": "no"}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Alumni Year: </TitleCon> {data.alumni_year}</SubConHeader2>
                    <SubConHeader2> <TitleCon>User: </TitleCon> {data.user}</SubConHeader2>
                    
                </>
                : 
                <small>Can't fetch additional Due Info.</small>}
                <SubConBtnHold>
                    <SubConBtn onClick={close}>Close</SubConBtn>
                </SubConBtnHold>
            </LeftSubCon>
        </BackDrop>
    )
}

//MEMBERS
export const MembersDashViewMore = ({ data, close }) => {
    return (
        <BackDrop>
            <style>
                {`
                    body{
                        overflow:hidden;
                    }
                `}
            </style>
            <LeftSubCon>
                <SubConHeader>More Details</SubConHeader>
                {data ? 
                <>
                    <PhotoHolderCon> <PhotoHolder alt='' src={data.photo}/> </PhotoHolderCon> 
                    <SubConHeader2><TitleCon>Id: </TitleCon> {data.id}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Email: </TitleCon> {data.email}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Amount Owing: </TitleCon> {data.amount_owing}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Is Exco: </TitleCon> {data.is_exco ? "yes": "no"}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Is Financial: </TitleCon> {data.is_financial ? "yes": "no"}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Alumni Year: </TitleCon> {data.alumni_year}</SubConHeader2>
                    <SubConHeader2> <TitleCon>User: </TitleCon> {data.user}</SubConHeader2>
                    <SubConHeader spaced="spaced">MEMBER INFO</SubConHeader>{
                        data?.member_info.map((item,index) => {
                            return(
                                <SubConHeader2 key={index}> <TitleCon>{item.name}: </TitleCon> {item.value}</SubConHeader2>
                            )
                        })
                    }
                </>
                : 
                <small>Can't fetch additional Members Info.</small>}
                <SubConBtnHold>
                    <SubConBtn onClick={close}>Close</SubConBtn>
                </SubConBtnHold>
            </LeftSubCon>
        </BackDrop>
    )
}

//EVENTS
export const EventsViewMore = ({ data, close }) => {
    const queryClient = useQueryClient()


    const { isLoading, mutate} = useMutation((eventId)=>deleteEvents(eventId), {
        onMutate: () => {
            toast.info("Event Deletion in progress",{progressClassName:"toastProgress",icon:false})
        },
        onSuccess: () => {
            toast.success("Event Deleted Successfully", {progressClassName:"toastProgress",icon:false})
            queryClient.invalidateQueries("all-events")
            close()
        },
        onError: () => {
            toast.error("Can't delete events")
        }
    })

    const { isLoading: updateLoading, mutate:updateMutate} = useMutation((eventData)=>updateEvent(eventData),{
        onMutate: () => {
            toast.info("Event Update in progress",{progressClassName:"toastProgress",icon:false})
        },
        onSuccess: () => {
            toast.success("Event Updated Successfully",{progressClassName:"toastProgress",icon:false})
            queryClient.invalidateQueries("all-events")
            close()
        },
        onError: () => {
            toast.error("Can't update event")
        }
    })
    const updateEventHandler = (payload) => {
        const formData = new FormData()
        Object.keys(payload)?.forEach(key => formData.append(key, payload[key]))
        updateMutate(formData)
    }
    const deleteEventHandler = (id) => {
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
            <LeftSubCon>
                <SubConHeader>More Details</SubConHeader>
                {data ? 
                <>
                    <PhotoHolderCon> <PhotoHolder alt='' src={data.image}/> </PhotoHolderCon> 
                    <SubConHeader2><TitleCon>Id: </TitleCon> {data.id}</SubConHeader2>
                    <SubConHeader2><TitleCon>Name: </TitleCon> {data.name}</SubConHeader2>
                    <SubConHeader2><TitleCon>Is Paid Event: </TitleCon> {data.is_paid_event ? "yes": "no"}</SubConHeader2>
                    <SubConHeader2><TitleCon>Re Occuring: </TitleCon> {data.re_occuring ? "yes": "no"}</SubConHeader2>
                    <SubConHeader2><TitleCon>Is Virtual: </TitleCon> {data.is_virtual ? "yes": "no"}</SubConHeader2>
                    <SubConHeader2><TitleCon>Commitee Id: </TitleCon> {data.commitee_id}</SubConHeader2>
                    <SubConHeader2><TitleCon>Exco Id: </TitleCon> {data.exco_id}</SubConHeader2>
                    <SubConHeader2><TitleCon>Is Active: </TitleCon> {data.is_active ? "yes": "no"}</SubConHeader2>
                    <SubConHeader2><TitleCon>Start Date: </TitleCon> {data.startDate}</SubConHeader2>
                    <SubConHeader2><TitleCon>Schedule Type: </TitleCon> {data.scheduletype}</SubConHeader2>
                    <SubConHeader2> <TitleCon>Schedule: </TitleCon> {Array.isArray(data.schedule) ? data.schedule.map(item => {
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
                }).join(',') : <span>{data.schedule}</span> }</SubConHeader2>
                <SubConHeader>Event Access</SubConHeader>
                <SubConHeader2> <TitleCon>Link: </TitleCon> {data.event_access.link}</SubConHeader2>
                <SubConHeader2> <TitleCon>Has Paid: </TitleCon>{data.event_access.has_paid ? "yes": "no"}</SubConHeader2>

                </>
                : 
                <small>Can't fetch additional Event Info.</small>}
                <SubConBtnHold>
                    <SubConBtn typex="filled" disabled={isLoading || updateLoading} onClick={()=>deleteEventHandler(data.id)}>Delete</SubConBtn>
                    <SubConBtn typex="filled" onClick={()=>updateEventHandler({event_id:data.id, switch_on:!data.is_active})} disabled={isLoading || updateLoading}>Update Status</SubConBtn>
                    <SubConBtn onClick={close} disabled={isLoading || updateLoading}>Close</SubConBtn>
                </SubConBtnHold>
            </LeftSubCon>
        </BackDrop>
    )
}

//NEWS
export const NewsViewMore = ({ data, close }) => {
    const queryClient = useQueryClient()


    const { isLoading, mutate} = useMutation((newsId)=>deleteNews(newsId), {
        onMutate: () => {
            toast.info("News Deletion in progress",{progressClassName:"toastProgress",icon:false})
        },
        onSuccess: () => {
            toast.success("News Deleted Successfully", {progressClassName:"toastProgress",icon:false})
            queryClient.invalidateQueries("all-news")
            close()
        },
        onError: (error) => {
            toast.error("Can't delete news")
            if(error?.message?.response?.data?.message?.error){
                toast.error(`Message: ${error.message.response.data.message.error}`, {autoClose: 9000})
            }
        }
    })

    const deleteNewsHandler = (id) => {
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
            <LeftSubCon>
                <SubConHeader>More Details</SubConHeader>
                {data ? 
                <>
                    <PhotoHolderCon> <PhotoHolder alt='' src={data.image}/> </PhotoHolderCon> 
                    <SubConHeader2><TitleCon>Id: </TitleCon> {data.id}</SubConHeader2>
                    {data.is_committe && <SubConHeader2><TitleCon>Committee id: </TitleCon> {data.commitee_name}</SubConHeader2>}
                    {data.is_exco && <SubConHeader2><TitleCon>Exco id: </TitleCon> {data.exco}</SubConHeader2>}
                    {data.is_member && <SubConHeader2><TitleCon>For Members: </TitleCon> {data.is_member ? "Yes" : "No"}</SubConHeader2>}
                    
                    <SubConHeader2><TitleCon>Name: </TitleCon> {data.name}</SubConHeader2>
                    <SubConHeader><TitleCon>Body</TitleCon></SubConHeader>
                    <SubConHeader2 style={{wordWrap: "break-word"}}>{data.body}</SubConHeader2>
                    <SubConHeader><TitleCon>Paragraphs</TitleCon></SubConHeader>
                    {
                        data.paragraphs.map(item => {
                            return(
                                <>
                                    {item.heading && <ParagraphHeading>{item.heading}</ParagraphHeading>}
                                    <SubConHeader2 style={{wordWrap: "break-word"}}>{item.paragragh}</SubConHeader2>
                                </>
                            )
                        })
                    }
                    
                </>
                : 
                <small>Can't fetch additional News Info.</small>}
                <SubConBtnHold>
                    <SubConBtn typex="filled" disabled={isLoading} onClick={()=>deleteNewsHandler(data.id)}>Delete</SubConBtn>
                    <SubConBtn onClick={close} disabled={isLoading}>Close</SubConBtn>
                </SubConBtnHold>
            </LeftSubCon>
        </BackDrop>
      )
}

//Publications
export const PublicationViewMore = ({ data, close }) => {
    const queryClient = useQueryClient()


    const { isLoading, mutate} = useMutation((pubId)=>deletePublication(pubId), {
        onMutate: () => {
            toast.info("Publication Deletion in progress",{progressClassName:"toastProgress",icon:false})
        },
        onSuccess: () => {
            toast.success("Publication Deleted Successfully", {progressClassName:"toastProgress",icon:false})
            queryClient.invalidateQueries("all-publications")
            close()
        },
        onError: (error) => {
            toast.error("Can't delete publication")
            if(error?.message?.response?.data?.message?.error){
                toast.error(`Message: ${error.message.response.data.message.error}`, {autoClose: 9000})
            }
        }
    })

    const deleteNewsHandler = (id) => {
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
            <LeftSubCon>
                <SubConHeader>More Details</SubConHeader>
                {data ? 
                <>
                    <PhotoHolderCon> <PhotoHolder alt='' src={data.image}/> </PhotoHolderCon> 
                    <SubConHeader2><TitleCon>Id: </TitleCon> {data.id}</SubConHeader2>
                    {data.is_committe && <SubConHeader2><TitleCon>Committee id: </TitleCon> {data.commitee_name}</SubConHeader2>}
                    {data.is_exco && <SubConHeader2><TitleCon>Exco id: </TitleCon> {data.exco}</SubConHeader2>}
                    {data.is_member && <SubConHeader2><TitleCon>For Members: </TitleCon> {data.is_member ? "Yes" : "No"}</SubConHeader2>}
                    <SubConHeader2><TitleCon>Name: </TitleCon> {data.name}</SubConHeader2>
                    <SubConHeader><TitleCon>Body</TitleCon></SubConHeader>
                    <SubConHeader2 style={{wordWrap: "break-word"}}>{data.body}</SubConHeader2>
                    <SubConHeader><TitleCon>Paragraphs</TitleCon></SubConHeader>
                    {
                        data.paragraphs.map(item => {
                            return(
                                <>
                                    {item.heading && <ParagraphHeading>{item.heading}</ParagraphHeading>}
                                    <SubConHeader2 style={{wordWrap: "break-word"}}>{item.paragragh}</SubConHeader2>
                                </>
                            )
                        })
                    }
                    
                </>
                : 
                <small>Can't fetch additional Publication Info.</small>}
                <SubConBtnHold>
                    <SubConBtn typex="filled" onClick={()=>deleteNewsHandler(data.id)} disabled={isLoading}>Delete</SubConBtn>
                    <SubConBtn onClick={close} disabled={isLoading}>Close</SubConBtn>
                </SubConBtnHold>
            </LeftSubCon>
        </BackDrop>
      )
}

//COMMITTEE
export const CommitteeViewMore = ({ data, close }) => {
    const [options, setOpions] = useState("details")
    const {register, handleSubmit,setValue, control} = useForm({
        defaultValues: {
            commitee_todo: {
                how: [""]
            }
        }
    })

    const { register:membRegister , handleSubmit:membHandlerSubmit } = useForm()
    
    const { fields, append, remove } = useFieldArray({
        name: "commitee_todo.how",
        control
    })

    const queryClient = useQueryClient()

    const { isLoading:updateLoading, mutate:updateMutate } = useMutation((payload)=>updateCommittee(payload), {
        onMutate: () => {
            toast.info("Committee Update in progress",{progressClassName:"toastProgress",icon:false})
        },
        onSuccess: () => {
            toast.success("Committee Updated",{progressClassName:"toastProgress",icon:false})
            queryClient.invalidateQueries("all-committees")
            close()
        },
        onError: (error) => {
            toast.error("Could not update committee")
            if(error?.message?.response?.data?.message?.error){
                toast.error(`Message: ${error.message.response.data.message.error}`, {autoClose: 9000})
            }
        }
    })

    const { mutate } = useMutation((payload)=>addMoreMembtoCommittee(payload),{
        onMutate: () => {
            toast.info("Adding Members in progress",{progressClassName:"toastProgress",icon:false})
        },
        onSuccess: () => {
            toast.success("Members Added",{progressClassName:"toastProgress",icon:false})
            queryClient.invalidateQueries("all-committees")
            close()
        },
        onError: (error) => {
            toast.error("Could not add members")
            if(error?.message?.response?.data?.message?.error){
                toast.error(`Message: ${error.message.response.data.message.error}`, {autoClose: 9000})
            }
        }
    })

    const { isLoading, isFetching, isError, data:membData } = useQuery("all-members",getAllMembers, {
        refetchOnWindowFocus: false,
        select: data => {
            const membArray = data.data.map(item => {
                return {id:item.id, email:item.email}
            })

            const result = membArray.sort((a,b)=> a.id - b.id)
            return result;
        }
    })

    // ISSUES HERE REAL ISSUES WITH THE DEPENDENCIES OF THE USE EFFECT
    useEffect(()=>{
        setValue("name", data?.name)
        setValue("commitee_todo", data?.commitee_todo)
    },[])

    const onSubmit = (subData) => {
        let { team_of_reference, commitee_todo, name } = subData
        team_of_reference = team_of_reference[0]

        const formData = new FormData()
        formData.append("team_of_reference", team_of_reference)
        formData.append("commitee_todo", JSON.stringify(commitee_todo))
        formData.append("name", name)
        
        updateMutate([data.id, formData])
    }

    const addMembSubmit = (membData) => {
        const formData = new FormData()
        Object.keys(membData)?.forEach(key => formData.append(key, JSON.stringify(membData[key])))
        formData.append("commitee_id", data.id)
        mutate(formData)
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

            {(isLoading || isFetching) ? <Loading loading={isLoading || isFetching}/> : (!isError) ? 
            <>
            
                {data !== null ?
                    <SubCon>
                        <OptionHolder>
                            <SubConHeader>
                                <OptionItems selected={options==="details" ? "select" : ""} onClick={()=>setOpions("details")}>Committe Details</OptionItems>
                            </SubConHeader>
                            <SubConHeader>
                                <OptionItems selected={options==="update" ? "select" : ""} onClick={()=>setOpions("update")}>Update Committee</OptionItems>
                            </SubConHeader>
                            <SubConHeader>
                                <OptionItems selected={options==="add" ? "select" : ""} onClick={()=>setOpions("add")}>Add Members To Committee</OptionItems>
                            </SubConHeader>
                        </OptionHolder>

                        {
                            options === "details" ? 
                            <CommitteeDetails>
                                <PhotoHolderCon> <PhotoHolder alt='' src={data.team_of_reference}/> </PhotoHolderCon> 
                                <SubConHeader2><TitleCon>Name: </TitleCon> {data.name}</SubConHeader2>

                                <SubConHeader>Members Id's</SubConHeader>
                                <CommitteeList>
                                    {
                                        data.connected_members.map((item,index) => (
                                            <CommitteeListSpan key={index}>{item.id},</CommitteeListSpan>
                                        ))
                                    }
                                </CommitteeList>

                                <SubConHeader>Committee Todos</SubConHeader>
                                <CommitteeList>
                                    {
                                        data.commitee_todo.how.map((item,index) => (
                                            <CommitteeListItem key={index}>{item}</CommitteeListItem>
                                        ))
                                    }
                                </CommitteeList>
                                <SubConHeader>Committee Duties</SubConHeader>
                                <CommitteeList>
                                    {
                                        data.commitee_duties.how.map((item,index) => (
                                            <CommitteeListItem key={index}>{item}</CommitteeListItem>
                                        ))
                                    }
                                </CommitteeList>
                            </CommitteeDetails>
                            :null
                        }
                        {
                            options === "update" ?
                            <CommitteeUpdate>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <FormLabel>
                                        Name:
                                        <FormDataComp type={"text"} {...register("name", {required:true})}/>
                                    </FormLabel>

                                    <FormLabel>
                                        Images:
                                        <FormDataComp type={"file"} accept="image/*" {...register("team_of_reference", {required:true})} />
                                    </FormLabel>

                                    {
                                        fields.map((field, index)=>{
                                            return(
                                                <section key={field.id}>
                                                    <FormLabel>
                                                        Committee Todo:
                                                        <FormDataComp type={"text"} {...register(`commitee_todo.how.${index}` , {required:true})}/>
                                                    </FormLabel>
                                                <DeleteButton typex="filled" type='button' onClick={() => remove(index)}>Delete</DeleteButton>
                                                </section>
                                            )
                                        })
                                    }
                                        <DeleteButton type='button' mt="filledup" onClick={() => append("Enter Todo Details Here")}>Add Committee Todo</DeleteButton>
                                    <SubConBtnHold>
                                        <SubConBtnInput type={"submit"} value="Update" typex="filled"/>
                                    </SubConBtnHold>
                                </Form>
                            </CommitteeUpdate>
                            :null
                        }
                        {
                            options === "add" ?
                            <CommitteeAdd>
                                <Form onSubmit={membHandlerSubmit(addMembSubmit)}>
                                    <FormLabel>
                                            Select Members To Add:
                                            <FormSelection multiple defaultValue={[]} {...membRegister("members_list", {required:true})}>
                                            <FormOption disabled value="">select an option</FormOption>
                                            {
                                                membData.map(item => (
                                                    <FormOption key={item.id} value={item.id}>{item.id} || {item.email}</FormOption>
                                                    ))
                                            }
                                        </FormSelection>
                                    </FormLabel>

                                    <SubConBtnInput type={"submit"} value="Update" typex="filled"/>
                                </Form>

                            </CommitteeAdd>
                            :null
                        }

                        <SubConBtnHold>
                            <SubConBtn onClick={close}>Close</SubConBtn>
                        </SubConBtnHold>
                    </SubCon>
                : <small>can't fetch data</small>}
            </>
            
            : <small>Can't fetch members</small> } 
        </BackDrop>
      )
}

export const ElectionAddPosition = ({close}) => {
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            positions: ["Input Position"]
        }
    })

    const { fields, append, remove } = useFieldArray({
        name: "positions",
        control
    })

    const onSubmit = data => console.log(data)

    return (
        <BackDrop>
            <style>
                {`
                    body{
                        overflow:hidden;
                    }
                `}
            </style>
            <VertSpaceBetween>
                <TopCon>
                    <SubConHeader>Add Position</SubConHeader>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {
                            fields.map((field, index)=>{
                                return (
                                    <>
                                        <section key={field.id}>
                                            <FormLabel>
                                                <FormDataComp type={"text"} {...register(`positions.${index}`, {required:true})}/>
                                            </FormLabel>
                                            <DeleteButton typex="filled" type='button' onClick={() => remove(index)}>Delete</DeleteButton>
                                        </section>
                                    </>
                                    
                                )
                            })
                        }
                        <AddCircleText onClick={()=>append("Input Position")}>
                            <PlusCircleIcon style={{width:"20px", height: "20px",}}/>
                            Add Position
                        </AddCircleText>

                        <SubConBtnHold>
                            <SubConBtnInput type={"submit"} value="Done" typex="filled"/>
                        </SubConBtnHold>    
                    </Form>
                </TopCon>

                <SubConBtnHold>
                    <SubConBtn onClick={close}>Close</SubConBtn>
                </SubConBtnHold>
            </VertSpaceBetween>
        </BackDrop>
    )
}

export const ElectionAddAspirant = ({close}) => {
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            bio: ["Input Aspirant Bio Info"]
        }
    })

    const { fields, append, remove } = useFieldArray({
        name: "bio",
        control
    })

    const onSubmit = data => console.log(data);

    return (
        <BackDrop>
            <style>
                {`
                    body{
                        overflow:hidden;
                    }
                `}
            </style>
            <VertSpaceBetween>
                <TopCon>                    
                    <SubConHeader>Add Aspirant</SubConHeader>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormLabel>
                             Position Name
                             <FormSelection defaultValue={""} {...register("scheduletype", {required:true})}>
                                <FormOption disabled value="">select an option</FormOption>
                                <FormOption value="day_of_week">Day Of Week</FormOption>
                                <FormOption value="month_of_year">Month of Year</FormOption>
                            </FormSelection>
                        </FormLabel>


                        <FormLabel>
                            Aspirant Name
                            <FormDataComp type={"text"} {...register("name", {required: true})}/>
                        </FormLabel>

                        <FormLabel>
                            Upload Aspirant Photo
                            <FormDataComp type={"file"} accept="image/*" {...register("aspirant-photo", {required:true})}/>
                        </FormLabel>

                        {
                            fields.map((field, index) => {
                                return(
                                    <section key={field.id}>
                                        <FormLabel>
                                            Aspirant Bio
                                            <FormTextArea {...register(`bio.${index}`, {required:true})}/>
                                        </FormLabel>

                                        <DeleteButton typex="filled" type='button' onClick={() => remove(index)}>Delete</DeleteButton>
                                    </section>
                                )
                            })
                        }
                        <AddCircleText onClick={()=>append("Input Aspirant Bio Info")}>
                            <PlusCircleIcon style={{width:"20px", height: "20px",}}/>
                            Add Aspirant Bio
                        </AddCircleText>

                        <FormLabel>
                            Upload Manifesto Document
                            <FormDataComp type={"file"} {...register("manifesto-docs", {required: true})}/>
                        </FormLabel>
                        
                        <FormLabel>
                            Upload Manifesto Video
                            <FormDataComp type={"file"} accept="video/*" {...register("manifesto-video", {required: true})}/>
                        </FormLabel>

                        <FormLabel>
                            Upload Manifesto Images
                            <FormDataComp type={"file"} accept="image/*" multiple {...register("manifesto-images", {required: true})}/>
                        </FormLabel>

                        <SubConBtnHold>
                            <SubConBtnInput type={"submit"} value="Done" typex="filled"/>
                        </SubConBtnHold>  
                    </Form>
                </TopCon>

                <SubConBtnHold>
                    <SubConBtn onClick={close}>Close</SubConBtn>
                </SubConBtnHold>
            </VertSpaceBetween>
        </BackDrop>
    )
}


export const ElectionResult = ({close}) => {

    return(
        <BackDrop>
            <style>
                {`
                    body{
                        overflow:hidden;
                    }
                `}
            </style>
            <VertSpaceBetween>
                <TopCon>                    
                    <SubConHeader>ELECTION RESULTS</SubConHeader>
                    <SmallTitle>So far, the results for the position of President of MAN</SmallTitle>

                    <ElectionResultGrid>
                        <ElectionResultGridItem>
                            <ElectionResultGridImage alt='' src={ImageToShow}/>
                            <ElectionResultGridText>
                                <ElectionResultGridTextHeading1>
                                    Name: <ElectionResultGridTextSmall>Olatunde Ajanyi</ElectionResultGridTextSmall>
                                </ElectionResultGridTextHeading1>

                                <ElectionResultGridTextHeading2>
                                    Vote: <ElectionResultGridTextSmall>5</ElectionResultGridTextSmall>
                                </ElectionResultGridTextHeading2>

                            </ElectionResultGridText>
                        </ElectionResultGridItem>
                      
                        <ElectionResultGridItem>
                            <ElectionResultGridImage alt='' src={ImageToShow}/>
                            <ElectionResultGridText>
                                <ElectionResultGridTextHeading1>
                                    Name: <ElectionResultGridTextSmall>Olatunde Ajanyi</ElectionResultGridTextSmall>
                                </ElectionResultGridTextHeading1>

                                <ElectionResultGridTextHeading2>
                                    Vote: <ElectionResultGridTextSmall>5</ElectionResultGridTextSmall>
                                </ElectionResultGridTextHeading2>

                            </ElectionResultGridText>
                        </ElectionResultGridItem>

                    </ElectionResultGrid>

                </TopCon>

                <SubConBtnHold>
                    <SubConBtn onClick={close}>Close</SubConBtn>
                </SubConBtnHold>
            </VertSpaceBetween>
        </BackDrop>
    )
}