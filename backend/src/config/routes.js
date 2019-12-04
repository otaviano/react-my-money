const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const BillingCicle = require('../api/billingCycle/billingCycleService')
    BillingCicle.register(router, '/billing-cycles')
}