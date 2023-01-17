import axios, { AxiosError } from "axios"
import { privateRequest } from "./axios-utils"

//LOGIN
export const loginUser = async (user) => {
    try{
        const { shortName, ...payload } = user
        const loginURL = `https://web-production-e5a7.up.railway.app/tenant/${shortName}/tenant/auth/login/`
        const res = await axios.post(loginURL, payload)
        return res.data
    }catch(error){
        if(!error?.response) {
            throw new Error("No Server Response")
        }
        else if(error?.response.status === 400) {
            throw new Error("Invalid Credentials")
        }
        else if(error?.response.status === 401) {
            throw new Error("Unauthorized")
        }
        else {
            throw new Error("Login Failed")
        }
    }
    
    // {email: 'dbadebayo@mail.com', password: 'buka2020backup@'}
}

//DUES
export const getAllDues = async () => {
    try{
        const res = await privateRequest.get('/tenant/dues/AdminManageDue/')
        return res.data
    }catch(e){
        throw new AxiosError(e)
    }
}

export const createDues = async (dueData) => {
    try{
        const res = await privateRequest.post('/tenant/dues/AdminManageDue/', dueData)
        return res.data
    }catch(e){
        throw new AxiosError(e)
    }
}


//EXCOS
export const getAllExcos = async () => {
    try{
        const res = await privateRequest.get('/tenant/user/ManageAssigningExos/')
        return res.data
    }catch(e){
        throw new AxiosError(e)
    }
}

//MEMBERS
export const getAllMembers = async () => {
    try{
        const res = await privateRequest.get('/tenant/user/memberlist-info/get_all_members/')
        return res.data
    }catch(e){
        throw new AxiosError(e)
    }
}

//NEEDS ENDPOINT
export const getMemberDues = async () => {
    try{
        const res = await privateRequest.get('/tenant/user/memberlist-info/get_all_members/')
        return res.data
    }catch(e){
        throw new AxiosError(e)
    }
}