import { Client } from './index'

export const GetUser = async () => {
  try {
    const res = await Client.get('/users')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}


export const AddUser = async () => {
    try {
      const res = await Client.post('/user')
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  
  export const RemoveUser = async () => {
    try {
      const res = await Client.delete('/users/:user_id')
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }