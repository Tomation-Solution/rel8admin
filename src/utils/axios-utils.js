import axios from "axios";

export const adminDetails = JSON.parse( localStorage.getItem("user"))

const TOKEN = adminDetails?.token

const SHORT_NAME = localStorage.getItem("shortName")
const BASE_URL = `https://web-production-e5a7.up.railway.app/tenant/${SHORT_NAME}/`

export const privateRequest = axios.create({
    baseURL: BASE_URL,
    headers: {Authorization: `Token ${TOKEN}`}
})