import axios from "axios"
import {toastr} from "react-redux-toastr"
import { BASE_URL } from "../common/base-const"

export function getList() {
    const request = axios.get(`${BASE_URL}/billing-cycles`)
    
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    axios.post(`${BASE_URL}/billing-cycles`,values)
        .then(p => {
            toastr.success("Sucesso", "Operação realizada com sucesso")
        }).catch(p => {
            p.response.data.errors.forEach(e => toastr.error("Erro", e));
        })
    
    return {
        type: 'TEMP'
    }
}