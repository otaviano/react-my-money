import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billing-cycle/billing-cycle'

export default props => (
    <Router history={hashHistory}>
        <Router path='/' component={Dashboard} />
        <Router path='/billing-cycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)
