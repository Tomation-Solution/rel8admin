import axios from "axios";

export const adminDetails = JSON.parse( localStorage.getItem("admin-user"))?.state?.user

const TOKEN = adminDetails?.token

const SHORT_NAME = JSON.parse(localStorage.getItem("shortName"))

const BASE_URL = `https://web-production-e5a7.up.railway.app/tenant/${SHORT_NAME}/`

export const privateRequest = axios.create({
    baseURL: BASE_URL,
    headers: {Authorization: `Token ${TOKEN}`}
})