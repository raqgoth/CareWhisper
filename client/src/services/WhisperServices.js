import { Client } from './index'

export const __GetWhispers = async () => {
  try {
    const res = await Client.get('/whispers')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}


export const __AddWhisper = async () => {
    try {
      const res = await Client.post('/whisper')
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const __RemoveWhisper = async () => {
    try {
      const res = await Client.delete('/whispers/:whisper_id')
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  export const __GetWhisper = async (whisper_id) => {
    try {
      const res = await Client.get(`/whispers/${whisper_id}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
