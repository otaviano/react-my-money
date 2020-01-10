import axios from "axios"

import { BASE_URL } from "../common/base-const"

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billing-cycles/summary`)

    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}