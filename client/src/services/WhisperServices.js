// import { Client } from './index'
import ApiClient from './ApiClient'

export const __GetWhispers = async () => {
  try {
    const res = await ApiClient.get('/whispers')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}


export const __AddWhisper = async () => {
    try {
      const res = await ApiClient.post('/whisper')
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  

  export const __RemoveWhisper = async () => {
    try {
      const res = await ApiClient.delete('/whispers/:whisper_id')
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  export const __GetWhisper = async (whisper_id) => {
    try {
      const res = await ApiClient.get(`/whispers/${whisper_id}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
