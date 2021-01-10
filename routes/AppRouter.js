const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const WhisperRouter= require('./WhisperRouter')
const MemeRouter = require('./MemeRouter')


Router.use('/user', UserRouter)
Router.use('/whispers', WhisperRouter)
Router.use('/memes', MemeRouter)



module.exports = Router