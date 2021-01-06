const Router =  require('express').Router()
const controller = require('../controllers/WhisperController')

Router.post('/:user_id', controller.createWhisper)
Router.delete('/:whisper_id', controller.deleteWhisper)
Router.put('/:whisper_id', controller.updateWhisper)
Router.get('/:whisper_id', controller.getWhisper)
Router.get('/user/:user_id', controller.getUserWhispers)


module.exports = Router