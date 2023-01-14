import React from 'react'
import styled from 'styled-components'
import { rel8Pink, rel8Purple, rel8White } from '../../globals'
import { useForm } from 'react-hook-form'
import { mobile } from '../../responsive'

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
    width: 350px;
    height: 500px;
    border-radius: 10px;
    padding: 20px;
    overflow-y: auto;

    ${
        mobile({
            width: "250px",
        })
    }
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

const AddDue = ({close}) => {
    const {register,watch,handleSubmit} = useForm({
        defaultValues: {
            scheduletype:"",
            schedule:[]
        }
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
    <SubCon>
        <SubConHeader>Add Due</SubConHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>
                Name:
                <FormData type={"text"} {...register("name", {required:true})}/>
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
                For Excos:
                <FormSelection defaultValue={""} {...register("is_for_excos", {required:true})}>
                    <FormOption disabled value="">select an option</FormOption>
                    <FormOption value={true}>Yes</FormOption>
                    <FormOption value={false}>No</FormOption>
                </FormSelection>
            </FormLabel>
            
            <FormLabel>
                Amount:
                <FormData min={0} type={"number"} {...register("amount", {
                    required:true,
                    min:{
                        value:0,
                        message:"invalid amount"
                    }
                    })}/>
            </FormLabel>
            <FormLabel>
                Start Date:
                <FormData type={"date"} {...register("startDate", {required:true})}/>
            </FormLabel>
            <FormLabel>
                Start Time:
                <FormData type={"time"} {...register("startTime", {required:true})}/>
            </FormLabel>
            
            {watch("re_occuring") === "true" && <>
            <FormLabel>
                Schedule Type:
                <FormSelection defaultValue={""} {...register("scheduletype", {required:true})}>
                    <FormOption disabled value="">select an option</FormOption>
                    <FormOption value="day_of_week">Day Of Week</FormOption>
                    <FormOption value="day_of_month">Day of Month</FormOption>
                </FormSelection>
            </FormLabel>

            {
                watch("scheduletype") === "day_of_month" && <>
                    <FormLabel>To select multiple months on desktop hold ctrl for windows or command button for Mac</FormLabel>
                    <FormLabel>
                        Select Months:
                    </FormLabel>
                    <FormSelection defaultValue={[]} multiple {...register("schedule")}>
                        <FormOption disabled value={""}>Select Options</FormOption>
                        <FormOption value="0">January</FormOption>
                        <FormOption value="1">February</FormOption>
                        <FormOption value="2">March</FormOption>
                        <FormOption value="3">April</FormOption>
                        <FormOption value="4">May</FormOption>
                        <FormOption value="5">June</FormOption>
                        <FormOption value="6">July</FormOption>
                        <FormOption value="7">August</FormOption>
                        <FormOption value="8">September</FormOption>
                        <FormOption value="9">October</FormOption>
                        <FormOption value="10">November</FormOption>
                        <FormOption value="11">December</FormOption>
                    </FormSelection>
                </>
            }
            
            {
                watch("scheduletype") === "day_of_week" && <>
                    <FormLabel>To select multiple days on desktop hold ctrl for windows or command button for Mac</FormLabel>
                    <FormLabel>
                        Select Week days:
                    </FormLabel>
                    <FormSelection defaultValue={[]} multiple {...register("schedule")}>
                        <FormOption disabled value={""}>Select Options</FormOption>
                        <FormOption value="0">Sunday</FormOption>
                        <FormOption value="1">Monday</FormOption>
                        <FormOption value="2">Tuesday</FormOption>
                        <FormOption value="3">Wednesday</FormOption>
                        <FormOption value="4">Thursday</FormOption>
                        <FormOption value="5">Friday</FormOption>
                        <FormOption value="6">Saturday</FormOption>
                    </FormSelection>
                </>
            }
            </>}
            <SubConBtnHold>
                <SubConBtn type={"submit"} value="Add" typex="filled"/>
                <SubConBtn type={"submit"} value="Cancel" onClick={close}/>
            </SubConBtnHold>
        </Form>
    </SubCon>
</BackDrop>
  )
}

export default AddDue