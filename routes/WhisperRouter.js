const Router =  require('express').Router()
const controller = require('../controllers/WhisperController')

Router.post('/:user_id', controller.createWhisper)
Router.delete('/:whisper_id', controller.deleteWhisper)
Router.get('/:whisper_id', controller.getOne)
Router.get('/:user_id', controller.getAll)


module.exports = Router