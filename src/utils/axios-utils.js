import axios from "axios";

export const adminDetails = JSON.parse( localStorage.getItem("admin-user"))?.state?.user

const TOKEN = adminDetails?.token

const SHORT_NAME = JSON.parse(localStorage.getItem("shortName"))

const BASE_URL = `https://web-production-e5a7.up.railway.app/tenant/${SHORT_NAME}/`

const NINM_URL = `https://web-production-d5b0.up.railway.app/tenant/testing_org/`

export const privateRequest = axios.create({
    baseURL: BASE_URL,
    headers: {Authorization: `Token ${TOKEN}`}
})

export const ninmRequest = axios.create({
    baseURL: NINM_URL,
    headers: {Authorization: `Token ${TOKEN}`}
})