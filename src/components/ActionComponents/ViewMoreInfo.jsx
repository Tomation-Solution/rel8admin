import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { rel8Pink, rel8Purple, rel8White } from '../../globals'
import { mobile } from '../../responsive'
import { deleteDue, deleteEvents, deleteNews, deletePublication, updateEvent } from '../../utils/api-calls'

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
    margin-top: ${props=>props.spaced === "spaced" ? "50px" : ""};
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
    text-align: center;
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
        </SubCon>
    </BackDrop>
  )
}

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
            <SubCon>
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
            </SubCon>
        </BackDrop>
    )
}

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
            <SubCon>
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
            </SubCon>
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
            <SubCon>
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
                <SubConHeader2> <TitleCon>Link:</TitleCon> {data.event_access.link}</SubConHeader2>
                <SubConHeader2> <TitleCon>Has Paid:</TitleCon>{data.event_access.has_paid ? "yes": "no"}</SubConHeader2>

                </>
                : 
                <small>Can't fetch additional Event Info.</small>}
                <SubConBtnHold>
                    <SubConBtn typex="filled" disabled={isLoading || updateLoading} onClick={()=>deleteEventHandler(data.id)}>Delete</SubConBtn>
                    <SubConBtn typex="filled" onClick={()=>updateEventHandler({event_id:data.id, switch_on:!data.is_active})} disabled={isLoading || updateLoading}>Update Status</SubConBtn>
                    <SubConBtn onClick={close} disabled={isLoading || updateLoading}>Close</SubConBtn>
                </SubConBtnHold>
            </SubCon>
        </BackDrop>
    )
}


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
            <SubCon>
                <SubConHeader>More Details</SubConHeader>
                {data ? 
                <>
                    <PhotoHolderCon> <PhotoHolder alt='' src={data.image}/> </PhotoHolderCon> 
                    <SubConHeader2><TitleCon>Id: </TitleCon> {data.id}</SubConHeader2>
                    <SubConHeader2><TitleCon>Name: </TitleCon> {data.name}</SubConHeader2>
                    <SubConHeader><TitleCon>Body</TitleCon></SubConHeader>
                    <SubConHeader2 style={{wordWrap: "break-word"}}>{data.body}</SubConHeader2>
                    <SubConHeader><TitleCon>Paragraphs</TitleCon></SubConHeader>
                    {
                        data.paragraphs.map(item => {
                            return(
                                <>
                                    {item.heading && <ParagraphHeading>{item.heading}</ParagraphHeading>}
                                    <SubConHeader2 style={{wordWrap: "break-word"}}>{item.paragraph}</SubConHeader2>
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
            </SubCon>
        </BackDrop>
      )
}

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
            <SubCon>
                <SubConHeader>More Details</SubConHeader>
                {data ? 
                <>
                    <PhotoHolderCon> <PhotoHolder alt='' src={data.image}/> </PhotoHolderCon> 
                    <SubConHeader2><TitleCon>Id: </TitleCon> {data.id}</SubConHeader2>
                    <SubConHeader2><TitleCon>Name: </TitleCon> {data.name}</SubConHeader2>
                    <SubConHeader><TitleCon>Body</TitleCon></SubConHeader>
                    <SubConHeader2 style={{wordWrap: "break-word"}}>{data.body}</SubConHeader2>
                    <SubConHeader><TitleCon>Paragraphs</TitleCon></SubConHeader>
                    {
                        data.paragraphs.map(item => {
                            return(
                                <>
                                    {item.heading && <ParagraphHeading>{item.heading}</ParagraphHeading>}
                                    <SubConHeader2 style={{wordWrap: "break-word"}}>{item.paragraph}</SubConHeader2>
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
            </SubCon>
        </BackDrop>
      )
}