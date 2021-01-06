const Router = require('express').Router()
const controller = require('../controllers/MemeController')

Router.get('/:meme_id', controller.getMemes)
Router.post('/:user_id/:meme_id', controller.createMeme)


module.exports = Router