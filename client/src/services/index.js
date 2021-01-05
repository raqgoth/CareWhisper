import Axios from 'axios'

export const Client = Axios.create({ baseURL: 'http://localhost:3001/api' })
