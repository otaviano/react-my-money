import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import { reducer as toastrReducer } from "react-redux-toastr";

import DashboardReducer from "../dashboard/dashboard-reducer"
import BillingCycleReducer from "../billing-cycle/billing-cycle-reducer"
import TabReducer from "../common/tab/tab-reducer"

const rootReducer = combineReducers({
    billingCycle: BillingCycleReducer,
    dashboard: DashboardReducer,
    form : formReducer,
    tab : TabReducer,
    toastr: toastrReducer
})

export default rootReducer