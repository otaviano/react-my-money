const _ = require('lodash')

module.exports = (req, resp, next) => {
    const bundle = resp.locals.bundle

    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        resp.status(500).json({ errors })
    } else 
        next()
}


const parseErrors = p => {
    const errors = []

    _.forIn(p, err => errors.push(err.message))

    return errors
}