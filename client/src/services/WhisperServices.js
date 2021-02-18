import ApiClient from './ApiClient'

export const __GetWhispers = async (userId) => {
  try {
    const res = await ApiClient.get(`/whispers/all/${userId}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}


export const __AddWhisper = async (form) => {
    try {
      const res = await ApiClient.post('/whispers',form)
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const __RemoveWhisper = async (whisperId) => {
    try {
      const res = await ApiClient.delete(`/whispers/${whisperId}`)
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
