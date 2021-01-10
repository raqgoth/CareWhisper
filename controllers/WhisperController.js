const {Whisper} = require('../models')
const moment = require('moment')

module.exports = class WhisperController {
    static path = '/whispers'

    static async getAll(req,res) {
     try {
        const whispers = await Whisper.findAll()
        res.send(whispers)
     } catch (error) {
         throw error
     }
 }
 static async getOne(req, res) {
    try {
      const whisper = await Whisper.findByPk(req.params.whisper_id)
      res.send(whisper)
    } catch (error) {
      throw error
    }
  }
  static async createWhisper(req, res) {
    try {
      let date = req.body.date
        ? moment(req.body.date, 'mm-dd-yyyy').toDate()
        : null
      const whisper = await Whisper.create({
        ...req.body,
        date: date || moment().add(1, 'hour')
      })
      res.send(whisper)
    } catch (error) {
      throw error
    }
  }

  static async deleteWhisper(req, res) {
    try {
      await Whisper.destroy({ where: { id: req.params.whisper_id } })
      res.send({ status: 'OK', item: req.params.whisper_id })
    } catch (error) {
      throw error
    }
  }
}


