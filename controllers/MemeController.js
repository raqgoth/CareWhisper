const {Meme} =require('../models')
const moment = require('moment')

module.exports = class MemeController {
    static path = '/memes'

    static async getAllMemes(req,res) {
     try {
        const memes = await Meme.findAll()
        res.send(memes)
     } catch (error) {
         throw error
     }
 }

 static async getOneMeme(req, res) {
    try {
      const meme = await Meme.findByPk(req.params.meme_id)
      res.send(meme)
    } catch (error) {
      throw error
    }
  }

  static async createMeme(req, res) {
    try {
      let date = req.body.date
        ? moment(req.body.date, 'mm-dd-yyyy').toDate()
        : null
      const meme = await Meme.create({
        ...req.body,
        date: date || moment().add(1, 'hour')
      })
      res.send(meme)
    } catch (error) {
      throw error
    }
  }

  static async deleteMeme(req, res) {
    try {
      await Meme.destroy({ where: { id: req.params.meme_id } })
      res.send({ status: 'OK', item: req.params.meme_id })
    } catch (error) {
      throw error
    }
  }
}