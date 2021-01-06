const {Whispers} = require('../models')

const createWhisper = async(req,res)=>{
    try {
        const user_id = req.params.user_id
        let whisperBody = {
            user_id,
            ...req.body
        }
        const whisper = await Whisper.create(whisperBody)
        res.send(whisper)
    } catch (error) {
        throw error
    }
}

const deleteWhisper = async(req,res)=>{
    try {
        await Whisper.destroy({where:{id:req.params.whisper_id}})
        res.send({msg:`whisper with the id of ${req.params.whisper_id} deleted`})
    } catch (error) {
        throw error
    }
}

const updateWhisper =async(req,res)=>{
    try {
        let whisperId = parseInt(req.params.whisper_id)
        console.log(req.body)
        let updatedWhisper = await Whisper.update(req.body,{
            where:{id:whisperId},
            returning:true
        })
        res.send(updatedWhisper)
    } catch (error) {
        throw error 
    }
}

const getWhisper = async(req,res)=>{
    try {
        let whisperId = parseInt(req.params.whisper_id)
        let whisper = await Whisper.findAll({
            where:{id:whisperId},
            include:[{model: Whisper, Meme}]
        })
        res.send(whisper)
    } catch (error) {
        throw error
    }
}

const getUserWhispers = async(req,res)=>{
    try {
        let userId = parseInt(req.params.user_id)
        let whisper = await Whispers.findAll({
            where:{user_id:userId},
            include:[{model: whisper, Meme}]
        })
        console.log(whisper)
        res.send(whisper)
    } catch (error) {
        throw error
    }
}

module.exports = {
    createWhisper,
    deleteWhisper,
    updateWhisper,
    getWhisper,
    getUserWhispers
}