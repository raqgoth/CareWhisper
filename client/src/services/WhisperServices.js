import { Client } from './index'

export const GetWhisper = async () => {
  try {
    const res = await Client.get('/whispers')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}


export const AddWhisper = async () => {
    try {
      const res = await Client.post('/whisper')
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const RemoveWhisper = async () => {
    try {
      const res = await Client.delete('/whispers/:whisper_id')
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  export const GetWhisper = async (whisperId) => {
    try {
      const res = await Client.get(`/whispers/${whisperId}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
