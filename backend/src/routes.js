const express = require('express')
const routes = express.Router()

routes.get('/', async(req, res) => {
    res.json({status: 'ok'})
})

module.exports = routes