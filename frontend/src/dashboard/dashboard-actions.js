import axios from "axios"

const BASE_URL = '//localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billing-cycles/summary`)

    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}