import { Client } from './index'

export const __GetMemes = async () => {
    try {
      const res = await Client.get('/memes')
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const __AddMeme = async () => {
    try {
      const res = await Client.post('/meme')
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const __RemoveMeme = async () => {
    try {
      const res = await Client.delete('/memes/:meme_id')
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  export const __GetMeme = async (wmemeId) => {
    try {
      const res = await Client.get(`/memes/${memeId}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }