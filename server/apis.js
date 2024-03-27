const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const auth = require('../middleware/token')
const helmet = require('helmet')
module.exports = function (app) {
    app.use(cors())
    app.use(express.static('public'))
    app.use(express.static('public'))
    app.use(express.json())
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(helmet())
    app.use('/api/user/auth' , require('../routers/users'))
    app.use('/api/user/auth' , require('../routers/auth'))
    app.use('/api/user/get' , require('../routers/users'))
    app.use('/api/user' , require('../routers/users'))
    app.use('/api/user' , require('../routers/users')) 
    app.use('/api/email' , require('../routers/email'))
    app.use('/api/text' , require('../routers/text'))
    app.use('/api/future' , require('../routers/future'))
    app.use('/api/future' , require('../routers/future'))
    app.use('/api/faq' , require('../routers/faq'))
    app.use('/api/contact' , require('../routers/contact'))
    app.use('/api/contact' , require('../routers/contact'))
    app.use('/api/course' , require('../routers/courses'))
    app.use('/api/video' , require('../routers/videos'))
    app.use('/api/fakt' , require('../routers/fakt'))
    // app.use(auth)

} 