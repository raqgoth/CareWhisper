const {Meme} =require('../models')

const createMeme = async(req,res)=>{
    try {
        const user_id = parseInt(req.params.user_id)
        const memeBody = {
            user_id,
            ...req.body 
        }
        const meme = await Meme.create(memeBody)
        res.send(meme)
    } catch (error) {
        throw error 
    }
}

const getMemes =async(req,res)=>{
    try {
        let userId = parseInt(req.params.user_id)
        let memes = await Meme.findAll({ where:{user_id:userId} })
        res.send(memes)
    } catch (error) {
        throw error 
    }
}

module.exports = {
    createMeme,
    getMemes
}
