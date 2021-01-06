const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const WhisperRouter= require('./WhisperRouter')
const MemeRouter = require('./MemeRouter')


Router.use('/user', UserRouter)
Router.use('/whisper', WhisperRouter)
Router.use('/meme', MemeRouter)



module.exports = Router