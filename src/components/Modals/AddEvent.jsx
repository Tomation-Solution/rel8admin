import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { rel8Pink, rel8Purple, rel8White } from '../../globals'

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
const Form = styled.form`
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
`
const FormData = styled.input`
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
const SubCon = styled.div`
    background-color: ${rel8White};
    width: 250px;
    height: 500px;
    border-radius: 10px;
    padding: 20px;
    overflow-y: auto;
`
const SubConHeader = styled.p`
    font-weight: 700;
    text-align: center;
`
const SubConBtnHold = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
`
const SubConBtn = styled.input`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: ${props=>props.typex==="filled" ? `${rel8Purple}`:`${rel8Pink}`};
    color: ${props=>props.typex==="filled" ? `${rel8White}`:`${rel8Purple}`};
    cursor: pointer;
`

const AddEvent = ({close}) => {
    const {register, handleSubmit} = useForm()
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
        <SubCon>
            <SubConHeader>Add Event</SubConHeader>
            <Form onSubmit={handleSubmit(onSubmit)}>
            {/* {
    "is_paid_event":false,
    "re_occuring":false,

} */}
                <FormLabel>
                    Name:
                    <FormData type={"text"} {...register("name", {required:true})}/>
                </FormLabel>
                <FormLabel>
                    Amount:
                    <FormData type={"number"} min={0} {...register("amount", {required:true,min:{
                        value: 0,
                        message: "invalid amount"
                    }})}/>
                </FormLabel>
                
                <FormLabel>
                    For Excos:
                    <FormSelection defaultValue={""} {...register("is_for_excos", {required:true})}>
                        <FormOption disabled value="">select an option</FormOption>
                        <FormOption value={true}>Yes</FormOption>
                        <FormOption value={false}>No</FormOption>
                    </FormSelection>
                </FormLabel>
               
                <FormLabel>
                    Is Virtual:
                    <FormSelection defaultValue={""} {...register("is_virtual", {required:true})}>
                        <FormOption disabled value="">select an option</FormOption>
                        <FormOption value={true}>Yes</FormOption>
                        <FormOption value={false}>No</FormOption>
                    </FormSelection>
                </FormLabel>
                
                <FormLabel>
                    Is Active:
                    <FormSelection defaultValue={""} {...register("is_active", {required:true})}>
                        <FormOption disabled value="">select an option</FormOption>
                        <FormOption value={true}>Yes</FormOption>
                        <FormOption value={false}>No</FormOption>
                    </FormSelection>
                </FormLabel>

                <FormLabel>
                    Is Reoccuring:
                    <FormSelection defaultValue={""} {...register("re_occuring", {required:true})}>
                        <FormOption disabled value="">select an option</FormOption>
                        <FormOption value={true}>Yes</FormOption>
                        <FormOption value={false}>No</FormOption>
                    </FormSelection>
                </FormLabel>
                
                <FormLabel>
                    Is Paid Event:
                    <FormSelection defaultValue={""} {...register("is_paid_event", {required:true})}>
                        <FormOption disabled value="">select an option</FormOption>
                        <FormOption value={true}>Yes</FormOption>
                        <FormOption value={false}>No</FormOption>
                    </FormSelection>
                </FormLabel>

                <FormLabel>
                    Address:
                    <FormData type={"text"} {...register("address", {required:true})}/>
                </FormLabel>

                <FormLabel>
                    Start Date:
                    <FormData type={"date"} {...register("startDate", {required:true})}/>
                </FormLabel>
                <FormLabel>
                    Start Time:
                    <FormData type={"time"} {...register("startTime", {required:true})}/>
                </FormLabel>

                <SubConBtnHold>
                    <SubConBtn type={"submit"} value="Add" typex="filled"/>
                    <SubConBtn type={"submit"} value="Cancel" onClick={close}/>
                </SubConBtnHold>
            </Form>
        </SubCon>
    </BackDrop>
  )
}

export default AddEvent