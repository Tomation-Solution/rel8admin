import axios from "axios"
// import { privateRequest } from "./axios-utils"

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