const Router =  require('express').Router()
const controller = require('../controllers/WhisperController')

Router.post('', controller.createWhisper)
Router.delete('/:whisper_id', controller.deleteWhisper)
Router.get('/:whisper_id', controller.getOne)
Router.get('/all/:user_id', controller.getAll)


module.exports = Router