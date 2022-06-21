const express = require("express")
const htmlRoutes = require('./htmlRoutes')
const noteRoutes = require("./noteRoutes")
const app = express.Router()


app.use('/', htmlRoutes)
app.use('/api', noteRoutes)




module.exports = app