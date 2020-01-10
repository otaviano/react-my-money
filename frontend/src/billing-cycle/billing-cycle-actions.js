import axios from "axios"
import {toastr} from "react-redux-toastr"
import { BASE_URL } from "../common/base-const"
import { reset } from "redux-form";
import { selectTab, showTabs } from "../common/tab/tab-actions"

export function getList() {
    const request = axios.get(`${BASE_URL}/billing-cycles`)
    
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billing-cycles`,values)
            .then(p => {
                toastr.success("Sucesso", "Operação realizada com sucesso")
                dispatch([
                    reset("billingCycleForm"),
                    getList(),
                    selectTab("tab-list")
                ])
            }).catch(p => {
                p.response.data.errors.forEach(e => toastr.error("Erro", e));
            })
    }
}
