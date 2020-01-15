import axios from "axios"
import {toastr} from "react-redux-toastr"
import { BASE_URL } from "../common/base-const"
import { reset, initialize } from "redux-form";
import { selectTab, showTabs } from "../common/tab/tab-actions"

const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/billing-cycles`)
    
    return {
        type: "BILLING_CYCLES_FETCHED",
        payload: request
    }
}

export function create(values) {
    return submit(values, "post")
}

export function update(values) {
    return submit(values, "put")
}

export function destroy(values) {
    return submit(values, "delete")
}

function submit(values, method) {
    return dispatch => {
        const id = values._id || ""
        axios[method](`${BASE_URL}/billing-cycles/${id}`,values)
            .then(p => {
                toastr.success("Sucesso", "Operação realizada com sucesso")
                dispatch(init())
            }).catch(p => {
                p.response.data.errors.forEach(e => toastr.error("Erro", e));
            })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs("tab-update"),
        selectTab("tab-update"),
        initialize("billingCycleForm", billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs("tab-delete"),
        selectTab("tab-delete"),
        initialize("billingCycleForm", billingCycle)
    ]
}

export function init() {
    return [
        showTabs("tab-list", "tab-create"),
        selectTab('tab-list'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}